import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../../common/entities/common.entity';

@Entity()
export class Answer extends CommonEntity {
  @Column()
  public answer4: number;

  @Column()
  public answer9: number;
}
