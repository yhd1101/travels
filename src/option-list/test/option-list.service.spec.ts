import { Test, TestingModule } from '@nestjs/testing';
import { OptionListService } from '../option-list.service';

describe('OptionListService', () => {
  let service: OptionListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptionListService],
    }).compile();

    service = module.get<OptionListService>(OptionListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
