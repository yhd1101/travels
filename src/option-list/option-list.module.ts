import { Module } from '@nestjs/common';
import { OptionListService } from './option-list.service';
import { OptionListController } from './option-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionList } from './entities/option-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OptionList])],
  controllers: [OptionListController],
  providers: [OptionListService],
})
export class OptionListModule {}
