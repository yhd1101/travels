import { Question } from '../../question/entities/question.entity';
import { OptionList } from '../../option-list/entities/option-list.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAnswerDto {
  @ApiProperty({
    description: 'insert question',
    default: 'questionId',
  })
  @IsString()
  @IsNotEmpty()
  question: Question;

  @ApiProperty({
    description: 'insert answer',
    default: 'optionId',
  })
  @IsString()
  @IsNotEmpty()
  answer: OptionList;
}
