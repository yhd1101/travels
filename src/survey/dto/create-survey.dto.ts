import { Question } from '../../question/entities/question.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateSurveyDto {
  @ApiProperty({
    description: 'insert survey name',
    default: 'survey name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'insert desc',
  })
  @IsString()
  @IsNotEmpty()
  desc: string;

  @ApiProperty({
    description: 'completed',
    default: false,
  })
  @IsBoolean()
  completed: boolean;
}
