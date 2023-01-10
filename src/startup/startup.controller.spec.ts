import { Test, TestingModule } from '@nestjs/testing';
import { StartupController } from './startup.controller';
import { StartupService } from './startup.service';

describe('StartupController', () => {
  let controller: StartupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StartupController],
      providers: [StartupService],
    }).compile();

    controller = module.get<StartupController>(StartupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
