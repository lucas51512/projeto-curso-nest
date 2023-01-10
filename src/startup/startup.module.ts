import { Module } from '@nestjs/common';
import { StartupService } from './startup.service';
import { StartupController } from './startup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Startup } from './entities/startup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Startup])],
  controllers: [StartupController],
  providers: [StartupService],
  exports: [TypeOrmModule],
})
export class StartupModule {}
