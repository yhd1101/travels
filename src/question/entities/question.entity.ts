import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../../common/entities/common.entity';

@Entity()
export class Question extends CommonEntity {
  @Column()
  public question1: string;

  @Column()
  public question2: string;

  @Column()
  public question3: string;

  @Column()
  public question4: string;

  @Column()
  public question5: string;

  @Column()
  public question6: string;

  @Column()
  public question7: string;

  @Column()
  public question8: string;

  @Column()
  public question9: string;
}
