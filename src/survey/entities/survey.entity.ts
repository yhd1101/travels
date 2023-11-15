import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CommonEntity } from '../../common/entities/common.entity';
import { Question } from '../../question/entities/question.entity';

@Entity()
export class Survey extends CommonEntity {
  @Column()
  public name: string;
  @Column()
  public desc: string;

  @OneToMany(() => Question, (question: Question) => question.survey)
  public questions: Question[];
}
