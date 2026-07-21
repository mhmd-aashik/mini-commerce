import { INestApplication, ValidationPipe } from '@nestjs/common';

export function configureGlobalValidation(app: INestApplication): void {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: false,
      },
      stopAtFirstError: false,
      validationError: {
        target: false,
        value: false,
      },
    }),
  );
}
