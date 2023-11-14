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

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getAllQuestions() {
    const questions = await this.questionService.questionGetAll();
    return questions;
  }

  @Post('/create')
  async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    const newQuestion =
      await this.questionService.questionCreate(createQuestionDto);
    return newQuestion;
  }

  @Get(':id')
  async getQuestionById(@Param('id') id: string) {
    const question = await this.questionService.questionGetById(id);
    return question;
  }

  @Put(':id')
  async updateQuestionById(
    @Body() createQuestionDto: CreateQuestionDto,
    @Param('id') id: string,
  ) {
    return await this.questionService.questionUpdateById(id, createQuestionDto);
  }

  @Delete(':id')
  async deleteQuestionById(@Param('id') id: string) {
    const question = await this.questionService.questionDeleteById(id);
    return question;
  }
}
