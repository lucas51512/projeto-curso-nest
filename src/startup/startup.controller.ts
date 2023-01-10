import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StartupService } from './startup.service';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';

@Controller('startup')
export class StartupController {
  constructor(private readonly startupService: StartupService) {}

  @Post()
  create(@Body() createStartupDto: CreateStartupDto) {
    return this.startupService.create(createStartupDto);
  }

  @Get()
  findAll() {
    return this.startupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.startupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStartupDto: UpdateStartupDto) {
    return this.startupService.update(+id, updateStartupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.startupService.remove(+id);
  }
}
