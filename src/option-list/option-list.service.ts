import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
      relations: ['question', 'answer'],
    });
    return { count: optionList.length, optionList };
  }

  async getByOptionId(id: string) {
    try {
      const option = await this.optionListRepository.findOne({
        where: { id },
        relations: ['question'],
      });
      return option;
    } catch (err) {
      throw new NotFoundException('option not found');
    }
  }

  async deleteByOptionId(id: string) {
    try {
      await this.optionListRepository.delete({ id });
      return 'deleted option';
    } catch (err) {
      throw new NotFoundException('option not found');
    }
  }

  async updatedByOptionId(
    id: string,
    createOptionListDto: CreateOptionListDto,
  ) {
    try {
      await this.optionListRepository.update(id, createOptionListDto);
      return 'updated option';
    } catch (err) {
      throw new NotFoundException('option not found');
    }
  }
}
