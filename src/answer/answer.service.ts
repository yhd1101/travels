import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const answer = await this.answerRepository.findOne({
      where: { id },
      relations: ['question', 'answer'],
    });
    if (!answer) {
      throw new HttpException('No answer', HttpStatus.NOT_FOUND);
    }
    return answer;
  }

  async updatedByAnswerId(id: string, updateAnswerDto: CreateAnswerDto) {
    await this.answerRepository.update(id, updateAnswerDto);
    return 'updated answer';
  }

  async deleteByAnswer(id: string) {
    await this.answerRepository.delete({ id });
    return 'deleted answer';
  }
}
