import { Module } from '@nestjs/common';
import { PersonaldataService } from './personaldata.service';
import { PersonaldataController } from './personaldata.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [PersonaldataController],
  providers: [PersonaldataService]
})
export class PersonaldataModule {}
