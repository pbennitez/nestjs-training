import { Test, TestingModule } from '@nestjs/testing';
import { UesrsController } from './users.controller';

describe('UesrsController', () => {
  let controller: UesrsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UesrsController],
    }).compile();

    controller = module.get<UesrsController>(UesrsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
