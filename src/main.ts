import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { BaseApIDocument } from './common/config/swagger.document';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import getLogLevels from './utills/getLogLevels';
import * as process from 'process';
import CustomLogger from './logger/customLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const configService = app.get(ConfigService);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useLogger(app.get(CustomLogger));

  const config = new BaseApIDocument().initializeOptions();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
