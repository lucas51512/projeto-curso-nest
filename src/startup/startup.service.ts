import { Injectable, Body } from '@nestjs/common';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Startup } from './entities/startup.entity';

@Injectable()
export class StartupService {
  constructor(
      @InjectRepository(Startup)
      private startupRepository: Repository<Startup>,
    ){}

  async create(@Body() createStartupDto: CreateStartupDto) {
    return await this.startupRepository.save(createStartupDto);
  }

  async findAll(): Promise <Startup[]> {
    return await this.startupRepository.find();
  }

  async findOne(id: number) {
    return await this.startupRepository.findOne({
      where: {
        idStartup: id,
      }
    });
  }

  async update(id: number, updateStartupDto: UpdateStartupDto) {
    return await this.startupRepository.update(id, updateStartupDto);
  }

  async remove(id: number): Promise<string> {
    await this.startupRepository.delete(id);
    return `Startup ${id} excluido`;
  }
}
