import { CommonEntity } from '../../common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Option extends CommonEntity {
  @Column({ default: true }) //true 예
  public option1: boolean;

  @Column('text', {
    array: true,
  })
  public option2?: string[];

  @Column('text', {
    array: true,
  })
  public option3?: string[];

  @Column()
  public optionExample4?: string;

  @Column('text', {
    array: true,
  })
  public option5?: string[];

  @Column('text', {
    array: true,
  })
  public option6?: string[];

  @Column('text', {
    array: true,
  })
  public option7?: string[];

  @Column({ default: true }) //true 남자
  public option8: boolean;
}
