import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
  ) {}

  async surveyCreate(createSurveyDto: CreateSurveyDto) {
    const newSurvey = await this.surveyRepository.create();
    await this.surveyRepository.save(newSurvey);
    return newSurvey;
  }
}
