import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer) private answerRepository: Repository<Answer>,
  ) {}

  async getAllAnswerList() {
    const answers = await this.answerRepository.find({
      relations: ['question', 'answer'],
    });
    return { count: answers.length, answers };
  }

  async createAnswer(createAnswerDto: CreateAnswerDto) {
    const newAnswer = await this.answerRepository.create(createAnswerDto);
    await this.answerRepository.save(newAnswer);
    return newAnswer;
  }
  async getByAnswerId(id: string) {
    try {
      const answer = await this.answerRepository.findOne({
        where: { id },
        relations: ['question', 'answer'],
      });
      return answer;
    } catch (err) {
      throw new NotFoundException('answer not found');
    }
  }

  async updatedByAnswerId(id: string, updateAnswerDto: CreateAnswerDto) {
    try {
      await this.answerRepository.update(id, updateAnswerDto);
      return 'updated answer';
    } catch (err) {
      throw new NotFoundException('answer not found');
    }
  }

  async deleteByAnswer(id: string) {
    try {
      await this.answerRepository.delete({ id });
      return 'deleted answer';
    } catch (err) {
      throw new NotFoundException('answer not found');
    }
  }
}
