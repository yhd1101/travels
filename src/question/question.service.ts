import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async questionCreate(createQuestionDto: CreateQuestionDto) {
    const newQuestion = await this.questionRepository.create(createQuestionDto);
    await this.questionRepository.save(newQuestion);
    return newQuestion;
  }
  //전체
  async questionGetAll() {
    const questions = await this.questionRepository.find({
      relations: ['survey'],
    });
    return { count: questions.length, questions };
  }

  async questionGetById(id: string) {
    const question = await this.questionRepository.findOne({
      where: { id },
      relations: ['survey'],
    });
    if (!question) {
      throw new HttpException('No id', HttpStatus.NOT_FOUND);
    }
    return question;
  }

  async questionDeleteById(id: string) {
    await this.questionRepository.delete({ id });
    return 'deleted question';
  }

  async questionUpdateById(id: string, createQuestionDto: CreateQuestionDto) {
    await this.questionRepository.update(id, createQuestionDto);
    return 'updated question';
  }
}
