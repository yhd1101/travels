import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { CommonEntity } from '../../common/entities/common.entity';
import { Question } from '../../question/entities/question.entity';
import { Provider } from './provier.enum';

@Entity()
export class Answer extends CommonEntity {
  @Column()
  public answer: number;

  @OneToOne(() => Question, (question: Question) => question.answer)
  @JoinColumn()
  public question: Question;

  @Column({
    type: 'enum',
    enum: Provider,
  })
  public score = Provider;
}
