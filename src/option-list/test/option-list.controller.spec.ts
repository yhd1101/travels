import { Test, TestingModule } from '@nestjs/testing';
import { OptionListController } from '../option-list.controller';
import { OptionListService } from '../option-list.service';

describe('OptionListController', () => {
  let controller: OptionListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptionListController],
      providers: [OptionListService],
    }).compile();

    controller = module.get<OptionListController>(OptionListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
