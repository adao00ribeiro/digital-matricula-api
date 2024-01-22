import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcademicModule } from './academic/academic.module';

@Module({
  imports: [AcademicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
