import { registerAs } from '@nestjs/config';
import { AppConfig, LogLevel, NodeEnvironment } from './app-config.interface';

function parseBoolean(value: string | undefined): boolean {
  return value?.trim().toLowerCase() === 'true';
}

function parseCommaSeparatedValues(value: string | undefined): string[] {
  if (!value) {
    return [];
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

export const appConfiguration = registerAs('app', (): AppConfig => ({
  nodeEnv: process.env.NODE_ENV as NodeEnvironment,
  name: process.env.APP_NAME ?? 'unknown-service',
  port: Number(process.env.PORT),
  logLevel: process.env.LOG_LEVEL as LogLevel,
  apiPrefix: process.env.API_PREFIX ?? 'api',
  apiVersion: process.env.API_VERSION ?? '1',
  corsEnabled: parseBoolean(process.env.CORS_ENABLED),
  corsOrigins: parseCommaSeparatedValues(process.env.CORS_ORIGINS),
}));
