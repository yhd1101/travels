import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../../common/entities/common.entity';

@Entity()
export class Survey extends CommonEntity {
  @Column()
  public name: string;
  @Column()
  public desc: string;
}
