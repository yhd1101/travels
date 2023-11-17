import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionDto {
  @ApiProperty({
    description: 'inseret question',
  })
  @IsString()
  @IsNotEmpty()
  question: string;
}
