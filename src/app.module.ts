import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { AppConfigModule } from './common/config/config.module';
import { OptionListModule } from './option-list/option-list.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    SurveyModule,
    QuestionModule,
    OptionListModule,
    AnswerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
