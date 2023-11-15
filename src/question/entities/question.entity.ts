import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CommonEntity } from '../../common/entities/common.entity';
import { Survey } from '../../survey/entities/survey.entity';

@Entity()
export class Question extends CommonEntity {
  @Column()
  public question: string;

  @ManyToOne(() => Survey, (survey: Survey) => survey.questions)
  @JoinColumn({ referencedColumnName: 'id' })
  public survey: Survey;
}
