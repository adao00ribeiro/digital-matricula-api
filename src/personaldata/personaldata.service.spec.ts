import { Test, TestingModule } from '@nestjs/testing';
import { PersonaldataService } from './personaldata.service';

describe('PersonaldataService', () => {
  let service: PersonaldataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonaldataService],
    }).compile();

    service = module.get<PersonaldataService>(PersonaldataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
