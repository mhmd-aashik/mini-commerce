import { INestApplication } from '@nestjs/common';

export interface CorsConfiguration {
  enabled: boolean;
  origins: string[];
}

export function configureCors(
  app: INestApplication,
  configuration: CorsConfiguration,
): void {
  if (!configuration.enabled) {
    return;
  }

  if (configuration.origins.length === 0) {
    throw new Error('CORS is enabled, but CORS_ORIGINS is empty');
  }

  app.enableCors({
    origin: configuration.origins,
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'X-Correlation-Id',
      'X-Request-Id',
    ],
    exposedHeaders: ['X-Correlation-Id', 'X-Request-Id'],
    credentials: true,
    maxAge: 86400,
  });
}
