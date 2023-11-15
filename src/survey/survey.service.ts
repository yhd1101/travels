import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { Repository } from 'typeorm';
import { Question } from '../question/entities/question.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
  ) {}

  //전체
  async surveyGetAll() {
    const surveys = await this.surveyRepository.find();
    return { count: surveys.length, surveys };
  }

  async surveyCreate(createSurveyDto: CreateSurveyDto) {
    const newSurvey = await this.surveyRepository.create(createSurveyDto);
    console.log(newSurvey);
    await this.surveyRepository.save(newSurvey);
    return newSurvey;
  }

  //특정 설문지 불라오기
  async surveyGetById(id: string) {
    const survey = await this.surveyRepository.findOneBy({ id });
    if (!survey) {
      throw new HttpException('No id', HttpStatus.NOT_FOUND);
    }

    return survey;
  }

  async surveyDeletedById(id: string) {
    await this.surveyRepository.delete({ id });
    return 'deleted survey';
  }

  async surveyUpdatedById(id: string, createSurveyDto: CreateSurveyDto) {
    await this.surveyRepository.update(id, createSurveyDto);
    return 'updated survey';
  }
}
