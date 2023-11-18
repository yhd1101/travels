import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { CommonEntity } from '../../common/entities/common.entity';
import { Question } from '../../question/entities/question.entity';
import { OptionList } from '../../option-list/entities/option-list.entity';

@Entity()
export class Answer extends CommonEntity {
  @OneToOne(() => Question, (question: Question) => question.answer)
  @JoinColumn()
  public question: Question;

  @ManyToOne(() => OptionList, (optionList: OptionList) => optionList.answer)
  @JoinColumn()
  public answer: OptionList;
}
