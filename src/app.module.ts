import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { AppConfigModule } from './common/config/config.module';
import { OptionListModule } from './option-list/option-list.module';
import { LoggerModule } from './logger/logger.module';
import LogsMiddleware from './utills/logs.middleware';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    SurveyModule,
    QuestionModule,
    OptionListModule,
    AnswerModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
