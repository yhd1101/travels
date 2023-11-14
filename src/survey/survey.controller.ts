import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post('/create')
  async createSurvey(@Body() createSurveyDto: CreateSurveyDto) {
    const newSurvey = await this.surveyService.surveyCreate(createSurveyDto);
    return newSurvey;
  }
}
