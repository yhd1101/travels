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
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  //전체불러오기
  @Get()
  async getAllSurvey() {
    const survey = await this.surveyService.surveyGetAll();
    return survey;
  }

  @Post('/create')
  async createSurvey(@Body() createSurveyDto: CreateSurveyDto) {
    const newSurvey = await this.surveyService.surveyCreate(createSurveyDto);
    return newSurvey;
  }

  @Get(':id')
  async getSurveyById(@Param('id') id: string) {
    const survey = await this.surveyService.surveyGetById(id);
    return survey;
  }

  @Put(':id')
  async updateSurveyById(
    @Body() createSurveyDto: CreateSurveyDto,
    @Param('id') id: string,
  ) {
    return await this.surveyService.surveyUpdatedById(id, createSurveyDto);
  }

  @Delete(':id')
  async deletedSurveyById(@Param('id') id: string) {
    const survey = await this.surveyService.surveyDeletedById(id);
    return survey;
  }
}
