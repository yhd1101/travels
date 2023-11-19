import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { Repository } from 'typeorm';
import { Question } from '../question/entities/question.entity';
import { PageOptionsDto } from '../common/dtos/page-options.dto';
import { PageMetaDto } from '../common/dtos/page-meta.dto';
import { PageDto } from '../common/dtos/page.dto';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
  ) {}

  //전체
  async surveyGetAll(pageOptionsDto: PageOptionsDto) {
    const queryBuilder =
      await this.surveyRepository.createQueryBuilder('survey');
    queryBuilder.leftJoinAndSelect('survey.questions', 'questions');
    queryBuilder.leftJoinAndSelect('questions.optionList', 'option');
    queryBuilder.leftJoinAndSelect('questions.answer', 'answer');
    queryBuilder.leftJoinAndSelect('answer.question', 'answerQuestion');
    queryBuilder.leftJoinAndSelect('answer.answer', 'answerOptionList');

    await queryBuilder
      .orderBy('survey.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();

    const { entities } = await queryBuilder.getRawAndEntities();
    console.log(entities);

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    return new PageDto(entities, pageMetaDto);
  }

  async surveyCreate(createSurveyDto: CreateSurveyDto) {
    const newSurvey = await this.surveyRepository.create(createSurveyDto);
    console.log(newSurvey);
    await this.surveyRepository.save(newSurvey);
    return newSurvey;
  }

  //특정 설문지 불라오기
  async surveyGetById(id: string) {
    try {
      const survey = await this.surveyRepository
        .createQueryBuilder('survey')
        .leftJoinAndSelect('survey.questions', 'questions')
        .where('survey.id= :id', { id })
        .getOne();
      return survey;
    } catch (err) {
      throw new NotFoundException('Survey Not Found');
    }
  }

  async completeSurvey(pageOptionsDto: PageOptionsDto) {
    const completed = true;

    if (completed) {
      const queryBuilder =
        await this.surveyRepository.createQueryBuilder('survey');
      queryBuilder.leftJoinAndSelect('survey.questions', 'questions');
      queryBuilder.leftJoinAndSelect('questions.optionList', 'option');
      queryBuilder.leftJoinAndSelect('questions.answer', 'answer');
      queryBuilder.leftJoinAndSelect('answer.question', 'answerQuestion');
      queryBuilder.leftJoinAndSelect('answer.answer', 'answerOptionList');

      await queryBuilder
        .orderBy('survey.createdAt', pageOptionsDto.order)
        .skip(pageOptionsDto.skip)
        .take(pageOptionsDto.take);

      const entities = await queryBuilder.getMany();
      console.log(entities);
      const itemCount = await queryBuilder.getCount();

      const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
      return new PageDto(entities, pageMetaDto);
    } else {
      throw new HttpException('No id', HttpStatus.NOT_FOUND);
    }
  }

  async surveyDeletedById(id: string) {
    try {
      await this.surveyRepository.delete({ id });
      return 'deleted survey';
    } catch (err) {
      throw new NotFoundException('Survey Not Found');
    }
  }

  async surveyUpdatedById(id: string, createSurveyDto: CreateSurveyDto) {
    try {
      await this.surveyRepository.update(id, createSurveyDto);
      return 'updated survey';
    } catch (err) {
      throw new NotFoundException('Survey Not Found');
    }
  }
}
