import { CommonEntity } from '../../common/entities/common.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Question } from '../../question/entities/question.entity';
import { Provier } from './provier.enum';
import { Answer } from '../../answer/entities/answer.entity';

@Entity()
export class OptionList extends CommonEntity {
  @ManyToOne(() => Question, (question: Question) => question.optionList)
  @JoinColumn()
  question: Question;

  @Column()
  public list: string;

  @Column({
    type: 'enum',
    enum: Provier,
  })
  public score: Provier;

  @OneToMany(() => Answer, (answer: Answer) => answer.answer)
  answer: Answer[];
}
