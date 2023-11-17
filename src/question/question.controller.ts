import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Question')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  @ApiOperation({ summary: '문제불러오기', description: '문제를 불러옴' })
  async getAllQuestions() {
    const questions = await this.questionService.questionGetAll();
    return questions;
  }

  @Post('/create')
  @ApiOperation({ summary: '문제 생성', description: '문제 생성함' })
  async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    const newQuestion =
      await this.questionService.questionCreate(createQuestionDto);
    return newQuestion;
  }

  @Get(':id')
  @ApiOperation({ summary: '문제 id 조회', description: '문제 id 조회' })
  async getQuestionById(@Param('id') id: string) {
    const question = await this.questionService.questionGetById(id);
    return question;
  }

  @Put(':id')
  @ApiOperation({ summary: '문제 수정', description: '문제 수정' })
  async updateQuestionById(
    @Body() createQuestionDto: CreateQuestionDto,
    @Param('id') id: string,
  ) {
    return await this.questionService.questionUpdateById(id, createQuestionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '문제 삭제', description: '문제 삭제' })
  async deleteQuestionById(@Param('id') id: string) {
    const question = await this.questionService.questionDeleteById(id);
    return question;
  }
}
