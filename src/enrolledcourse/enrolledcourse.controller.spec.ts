import { Test, TestingModule } from '@nestjs/testing';
import { EnrolledcourseController } from './enrolledcourse.controller';
import { EnrolledcourseService } from './enrolledcourse.service';

describe('EnrolledcourseController', () => {
  let controller: EnrolledcourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnrolledcourseController],
      providers: [EnrolledcourseService],
    }).compile();

    controller = module.get<EnrolledcourseController>(EnrolledcourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
