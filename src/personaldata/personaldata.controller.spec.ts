import { Test, TestingModule } from '@nestjs/testing';
import { PersonaldataController } from './personaldata.controller';
import { PersonaldataService } from './personaldata.service';

describe('PersonaldataController', () => {
  let controller: PersonaldataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonaldataController],
      providers: [PersonaldataService],
    }).compile();

    controller = module.get<PersonaldataController>(PersonaldataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
