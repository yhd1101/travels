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

@Entity()
export class Question extends CommonEntity {
  @Column()
  public question: string;

  @Column({
    default: true,
  })
  isActive: boolean;

  @ManyToOne(() => Survey, (survey: Survey) => survey.questions)
  @JoinColumn({ referencedColumnName: 'id' })
  public survey: Survey;

  @OneToOne(() => Answer, (answer: Answer) => answer.question)
  public answer: Answer;
}
