import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CommonEntity } from '../../common/entities/common.entity';
import { Survey } from '../../survey/entities/survey.entity';
import { Answer } from '../../answer/entities/answer.entity';
import { OptionList } from '../../option-list/entities/option-list.entity';

@Entity()
export class Question extends CommonEntity {
  @Column()
  public question: string;

  @Column({
    default: true,
  })
  isActive: boolean;

  @ManyToOne(() => Survey, (survey: Survey) => survey.questions)
  @JoinColumn()
  public survey: Survey;

  @OneToOne(() => Answer, (answer: Answer) => answer.question)
  public answer: Answer;

  @OneToMany(() => OptionList, (optionList: OptionList) => optionList.question)
  public optionList: OptionList[];
}
