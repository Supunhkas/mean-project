import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ValidationErrorFilter } from 'mongo-validationfilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(new ValidationPipe());
   app.useGlobalFilters(new ValidationErrorFilter());
   app.enableCors();
  await app.listen(3000);
}
bootstrap();