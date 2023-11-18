import { Question } from '../../question/entities/question.entity';
import { Provier } from '../entities/provier.enum';

export class CreateOptionListDto {
  question: Question;
  list: string;
  score: Provier;
}
