import { NestFactory } from '@nestjs/core';
import { NotificationServiceModule } from './notification-service.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(NotificationServiceModule);

  const port = Number(process.env.NOTIFICATION_SERVICE_PORT ?? 3003);

  await app.listen(port);

  Logger.log(
    `Notification Service is running on http://localhost:${port}`,
    'Bootstrap',
  );
}
void bootstrap();
