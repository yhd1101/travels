import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Req,
  Query,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Question } from '../question/entities/question.entity';
import { PageOptionsDto } from '../common/dtos/page-options.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Survey')
@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  //전체불러오기
  @Get()
  @ApiOperation({
    summary: '전체설문지 조회',
    description: '설문지 전체를 조회함',
  })
  async getAllSurvey(@Query() pageOptionsDto: PageOptionsDto) {
    // const survey = await this.surveyService.surveyGetAll();
    // return survey;

    return await this.surveyService.surveyGetAll(pageOptionsDto);
  }

  //완료된 설문지
  @Get('/complete')
  @ApiOperation({ summary: '완료된 설문지', description: '완료된 설문지조회' })
  async completeSurvey() {
    return await this.surveyService.completeSurvey();
  }

  @Post('/create')
  @ApiOperation({ summary: '설문지 Create', description: '설문지생성' })
  async createSurvey(@Body() createSurveyDto: CreateSurveyDto) {
    const newSurvey = await this.surveyService.surveyCreate(createSurveyDto);
    return newSurvey;
  }

  @Get(':id')
  @ApiOperation({
    summary: '설문지 상세페이지 API',
    description: '설문지 상세페이지',
  })
  async getSurveyById(@Param('id') id: string) {
    const survey = await this.surveyService.surveyGetById(id);
    return survey;
  }

  @Put(':id')
  @ApiOperation({ summary: '설문지 Update', description: '설문지를 수정함' })
  async updateSurveyById(
    @Body() createSurveyDto: CreateSurveyDto,
    @Param('id') id: string,
  ) {
    return await this.surveyService.surveyUpdatedById(id, createSurveyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '설문지 Delete', description: '설문지삭제' })
  async deletedSurveyById(@Param('id') id: string) {
    const survey = await this.surveyService.surveyDeletedById(id);
    return survey;
  }
}
