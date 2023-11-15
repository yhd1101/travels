import { ApiPropertyOptional } from '@nestjs/swagger';
import { OrderConstants } from '../constants/order.constants';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class PageOptionsDto {
  @ApiPropertyOptional({ enum: OrderConstants, default: OrderConstants.ASC })
  readonly order?: OrderConstants = OrderConstants.ASC;

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1;

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  readonly take?: number = 5;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
