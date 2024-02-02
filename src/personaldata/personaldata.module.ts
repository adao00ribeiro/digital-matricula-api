import { Module } from '@nestjs/common';
import { PersonaldataService } from './personaldata.service';
import { PersonaldataController } from './personaldata.controller';

@Module({
  controllers: [PersonaldataController],
  providers: [PersonaldataService]
})
export class PersonaldataModule {}
