import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Repository } from 'typeorm';
import { catchError } from 'rxjs';

@Injectable()
export class QuestionService {
  private readonly logger = new Logger(QuestionService.name);
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
      relations: ['survey', 'optionList', 'answer.question', 'answer.answer'],
    });
    return { count: questions.length, questions };
  }

  async questionGetById(id: string) {
    try {
      const question = await this.questionRepository.findOne({
        where: { id },
        relations: ['survey'],
      });

      return question;
    } catch (err) {
      this.logger.error('question not found');
      throw new NotFoundException('question not found');
    }
  }

  async questionDeleteById(id: string) {
    try {
      await this.questionRepository.delete({ id });
      return 'deleted question';
    } catch (err) {
      throw new NotFoundException('question not found');
    }
  }

  async questionUpdateById(id: string, createQuestionDto: CreateQuestionDto) {
    try {
      await this.questionRepository.update(id, createQuestionDto);
      return 'updated question';
    } catch (err) {
      throw new NotFoundException('Question not found');
    }
  }
}
