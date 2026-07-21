import { NestFactory } from '@nestjs/core';
import { OrderServiceModule } from './order-service.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);

  const configService = app.get(ConfigService);

  const appName = configService.getOrThrow<string>('app.name');
  const port = configService.getOrThrow<number>('app.port');
  const nodeEnv = configService.getOrThrow<string>('app.nodeEnv');

  await app.listen(port);

  Logger.log(
    `${appName} is running on http://localhost:${port} in ${nodeEnv} mode`,
    'Bootstrap',
  );
}
void bootstrap();
