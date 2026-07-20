import { NestFactory } from '@nestjs/core';
import { OrderServiceModule } from './order-service.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);

  const port = Number(process.env.ORDER_SERVICE_PORT ?? 3002);

  await app.listen(port);

  Logger.log(
    `Order Service is running on http://localhost:${port}`,
    'Bootstrap',
  );
}
void bootstrap();
