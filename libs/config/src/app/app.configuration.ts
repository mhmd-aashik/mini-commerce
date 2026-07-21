import { registerAs } from '@nestjs/config';
import { AppConfig, LogLevel, NodeEnvironment } from './app-config.interface';

export const appConfiguration = registerAs('app', (): AppConfig => ({
  nodeEnv: process.env.NODE_ENV as NodeEnvironment,
  name: process.env.APP_NAME ?? 'unknown-service',
  port: Number(process.env.PORT),
  logLevel: process.env.LOG_LEVEL as LogLevel,
}));
