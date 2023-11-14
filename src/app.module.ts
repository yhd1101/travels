import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';
import { OptionsModule } from './options/options.module';
import { AnswerModule } from './answer/answer.module';
import * as Joi from '@hapi/joi';
import { AppConfigModule } from './common/config/config.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    SurveyModule,
    QuestionModule,
    OptionsModule,
    AnswerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
