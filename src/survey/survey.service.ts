import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    await queryBuilder
      .orderBy('survey.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

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
    const survey = await this.surveyRepository
      .createQueryBuilder('survey')
      .leftJoinAndSelect('survey.questions', 'questions')
      .where('survey.id= :id', { id })
      .getOne();
    if (!survey) {
      throw new HttpException('No id', HttpStatus.NOT_FOUND);
    }

    return survey;
  }
  //
  // async completeSurvey(
  //   createSurveyDto: CreateSurveyDto,
  //   pageOptionsDto: PageOptionsDto,
  // ) {
  //   if (createSurveyDto.completed === true) {
  //     const queryBuilder =
  //       await this.surveyRepository.createQueryBuilder('survey');
  //     queryBuilder.leftJoinAndSelect('survey.questions', 'questions');
  //
  //     await queryBuilder
  //       .orderBy('survey.createdAt', pageOptionsDto.order)
  //       .skip(pageOptionsDto.skip)
  //       .take(pageOptionsDto.take);
  //
  //     const itemCount = await queryBuilder.getCount();
  //     const { entities } = await queryBuilder.getRawAndEntities();
  //
  //     const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
  //     return new PageDto(entities, pageMetaDto);
  //   } else {
  //     return 'No Complete Survey';
  //   }
  // }

  async completeSurvey() {
    const completed = true;
    return await this.surveyRepository.findOneBy({ completed });
    // if (createSurveyDto.completed === true) {
    //   const queryBuilder = this.surveyRepository.createQueryBuilder('survey');
    //   queryBuilder.leftJoinAndSelect('survey.questions', 'questions');
    //
    //   queryBuilder
    //     .orderBy('survey.createdAt', pageOptionsDto.order)
    //     .skip(pageOptionsDto.skip)
    //     .take(pageOptionsDto.take);
    //
    //   const entities = await queryBuilder.getMany();
    //   const itemCount = await queryBuilder.getCount();
    //
    //   const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    //   return new PageDto(entities, pageMetaDto);
    // } else {
    //   return 'No Complete Survey';
    // }
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
