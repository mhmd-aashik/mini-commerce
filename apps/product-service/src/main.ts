import { NestFactory } from '@nestjs/core';
import { ProductServiceModule } from './product-service.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ProductServiceModule);
  const port = Number(process.env.PRODUCT_SERVICE_PORT ?? 3001);

  await app.listen(port);

  Logger.log(
    `Product Service is running on http://localhost:${port}`,
    'Bootstrap',
  );
}
void bootstrap();
