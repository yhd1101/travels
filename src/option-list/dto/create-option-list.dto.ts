import { Question } from '../../question/entities/question.entity';
import { Provier } from '../entities/provier.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOptionListDto {
  @ApiProperty({
    description: 'insert question',
    default: 'questionId',
  })
  @IsString()
  @IsNotEmpty()
  question: Question;

  @ApiProperty({
    description: 'insert List',
    default: 'list1',
  })
  @IsString()
  @IsNotEmpty()
  list: string;

  @ApiProperty({
    description: 'insert survey',
    default: 0,
  })
  @IsNotEmpty()
  score: Provier;
}
