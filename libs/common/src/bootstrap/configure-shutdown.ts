import { INestApplication } from '@nestjs/common';

export function configureGracefulShutdown(app: INestApplication): void {
  app.enableShutdownHooks(['SIGINT', 'SIGTERM']);
}
