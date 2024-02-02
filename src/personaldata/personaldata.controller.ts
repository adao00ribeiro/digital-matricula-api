import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonaldataService } from './personaldata.service';
import { CreatePersonaldatumDto } from './dto/create-personaldatum.dto';
import { UpdatePersonaldatumDto } from './dto/update-personaldatum.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Personal Data')
@Controller('personaldata')
export class PersonaldataController {
  constructor(private readonly personaldataService: PersonaldataService) { }

  @Post()
  create(@Body() createPersonaldatumDto: CreatePersonaldatumDto) {
    return this.personaldataService.create(createPersonaldatumDto);
  }

  @Get()
  findAll() {
    return this.personaldataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaldataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonaldatumDto: UpdatePersonaldatumDto) {
    return this.personaldataService.update(+id, updatePersonaldatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaldataService.remove(+id);
  }
}
