import { Question } from '../../question/entities/question.entity';
import { OptionList } from '../../option-list/entities/option-list.entity';

export class CreateAnswerDto {
  question: Question;
  answer: OptionList;
}
