import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { OptionListService } from './option-list.service';
import { CreateOptionListDto } from './dto/create-option-list.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('options')
export class OptionListController {
  constructor(private readonly optionListService: OptionListService) {}

  @Get()
  @ApiOperation({ summary: '항목전체 조회' })
  async getALLOperation() {
    const optionList = await this.optionListService.getAllOptionsList();
    return optionList;
  }

  @Post('/create')
  @ApiOperation({ summary: '문제항목 만들기' })
  async createOptionList(@Body() createOptionListDto: CreateOptionListDto) {
    const newOptionList =
      await this.optionListService.createOptionList(createOptionListDto);
    return newOptionList;
  }

  @Get(':id')
  @ApiOperation({ summary: '문제항목 상세로 불러오기' })
  async getOptionById(@Param('id') id: string) {
    const option = await this.optionListService.getByOptionId(id);
    return option;
  }

  @Put(':id')
  @ApiOperation({ summary: '문제항목 수정' })
  async updateOptionById(
    @Body() createOptionListDto: CreateOptionListDto,
    @Param('id') id: string,
  ) {
    return await this.optionListService.updatedByOptionId(
      id,
      createOptionListDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: '문제항목 삭제' })
  async deleteOptionById(@Param('id') id: string) {
    const option = await this.optionListService.deleteByOptionId(id);
    return option;
  }
}
