import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['debug', 'log', 'error'],
  });
  app.use(
    session({ secret: 'secret', resave: false, saveUninitialized: false }),
  );

  const options = new DocumentBuilder()
    .setTitle('Board API Docs')
    .setDescription('The Board API description')
    .setVersion('1.0')
    .addTag('board')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
