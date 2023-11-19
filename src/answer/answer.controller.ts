import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Answer')
@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('/create')
  @ApiOperation({ summary: '정답' })
  async createAnswer(@Body() createAnswerDto: CreateAnswerDto) {
    const newAnswer = await this.answerService.createAnswer(createAnswerDto);
    return newAnswer;
  }

  @Get()
  @ApiOperation({ summary: '답 전체 조회' })
  async getAllAnswer() {
    const answer = await this.answerService.getAllAnswerList();
    return answer;
  }

  @Get(':id')
  @ApiOperation({ summary: '정답 불러오기' })
  async getAnswer(@Param('id') id: string) {
    const answer = await this.answerService.getByAnswerId(id);
    return answer;
  }

  @Put(':id')
  @ApiOperation({ summary: '정답 수정' })
  async updateAnswer(
    @Param('id') id: string,
    @Body() createAnswerDto: CreateAnswerDto,
  ) {
    const answer = await this.answerService.updatedByAnswerId(
      id,
      createAnswerDto,
    );
    return answer;
  }

  @Delete(':id')
  @ApiOperation({ summary: '정답삭제' })
  async deleteAnswer(@Param('id') id: string) {
    const answer = await this.answerService.deleteByAnswer(id);
    return answer;
  }
}
