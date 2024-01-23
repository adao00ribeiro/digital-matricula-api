import { Test, TestingModule } from '@nestjs/testing';
import { EnrolledcourseService } from './enrolledcourse.service';

describe('EnrolledcourseService', () => {
  let service: EnrolledcourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrolledcourseService],
    }).compile();

    service = module.get<EnrolledcourseService>(EnrolledcourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
