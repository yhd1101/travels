import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOptionListDto } from './dto/create-option-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionList } from './entities/option-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OptionListService {
  constructor(
    @InjectRepository(OptionList)
    private optionListRepository: Repository<OptionList>,
  ) {}

  async createOptionList(createOptionListDto: CreateOptionListDto) {
    const newOptionList =
      await this.optionListRepository.create(createOptionListDto);
    await this.optionListRepository.save(newOptionList);
    return newOptionList;
  }

  async getAllOptionsList() {
    const optionList = await this.optionListRepository.find({
      relations: ['question'],
    });
    return { count: optionList.length, optionList };
  }

  async getByOptionId(id: string) {
    const option = await this.optionListRepository.findOne({
      where: { id },
      relations: ['question'],
    });
    if (!option) {
      throw new HttpException('No option', HttpStatus.NOT_FOUND);
    }
    return option;
  }

  async deleteByOptionId(id: string) {
    await this.optionListRepository.delete({ id });
    return 'deleted option';
  }

  async updatedByOptionId(
    id: string,
    createOptionListDto: CreateOptionListDto,
  ) {
    await this.optionListRepository.update(id, createOptionListDto);
    return 'updated option';
  }
}
