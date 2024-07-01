// Modules and classes import
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';

// Bootstrap the application and initialize Swagger
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger document configuration
  const config = new DocumentBuilder()
    .setTitle('To-Do App')
    .setDescription('To-Do List Application')
    .setVersion('1.0')
    .build();

  // Swagger document creation and Swagger UI set-up
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start the application listening on port 3000
  await app.listen(3000);
}
bootstrap();