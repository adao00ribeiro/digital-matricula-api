import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from './pipes/validation.pipe';
import { HttpExceptionFilter } from './exception/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Digital Matricula API')
    .setDescription('Empower your educational experience with the Digital Matricula API. Seamlessly manage courses, academic information, and more with this robust and user-friendly interface. Version 1.0 brings innovative features to enhance your academic journey.')
    .setVersion('1.0')
    .addTag('Course', 'Explore and manage courses effortlessly.')
    .addTag('Academic', 'Elevate your academic endeavors with comprehensive tools and resources.')
    .addTag('Document Upload', 'Effortlessly upload and manage academic documents for a streamlined experience.')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
