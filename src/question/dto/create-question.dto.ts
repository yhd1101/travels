import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Survey } from '../../survey/entities/survey.entity';

export class CreateQuestionDto {
  @ApiProperty({
    description: 'inseret question',
    default: 'question1',
  })
  @IsString()
  @IsNotEmpty()
  question: string;

  @ApiProperty({
    description: 'insert survey',
    default: 'surveyId',
  })
  @IsString()
  @IsNotEmpty()
  survey: Survey;
}
