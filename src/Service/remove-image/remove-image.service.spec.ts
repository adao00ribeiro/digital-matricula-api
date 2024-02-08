import { Test, TestingModule } from '@nestjs/testing';
import { RemoveImageService } from './remove-image.service';

describe('RemoveImageService', () => {
  let service: RemoveImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveImageService],
    }).compile();

    service = module.get<RemoveImageService>(RemoveImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
