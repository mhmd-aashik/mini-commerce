import { AppConfig } from '@app/config';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger as PinoNestLogger } from 'nestjs-pino';
import { BootstrapHttpApplicationOptions } from './bootstrap-options.interface';
import { configureCors } from './configure-cors';
import { configureGlobalValidation } from './configure-validation';
import { configureApiVersioning } from './configure-versioning';
import { configureSecurityHeaders } from './configure-security';
import { configureGracefulShutdown } from './configure-shutdown';
import { correlationIdMiddleware } from '../correlation/correlation-id.middleware';

export async function bootstrapHttpApplication(
  options: BootstrapHttpApplicationOptions,
): Promise<INestApplication> {
  const app = await NestFactory.create(options.rootModule, {
    ...options.nestApplicationOptions,
    bufferLogs: true,
  });

  app.use(correlationIdMiddleware);

  const nestLogger = app.get(PinoNestLogger);

  // Send Nest framework logs through Pino.
  app.useLogger(nestLogger);

  const configService = app.get(ConfigService);
  const appConfig = configService.getOrThrow<AppConfig>('app');

  app.setGlobalPrefix(appConfig.apiPrefix);

  configureApiVersioning(app, appConfig.apiVersion);
  configureGlobalValidation(app);
  configureSecurityHeaders(app);
  configureGracefulShutdown(app);

  configureCors(app, {
    enabled: options.enableCors === true && appConfig.corsEnabled,
    origins: appConfig.corsOrigins,
  });

  await app.listen(appConfig.port);

  nestLogger.log(
    {
      service: appConfig.name,
      environment: appConfig.nodeEnv,
      port: appConfig.port,
      prefix: appConfig.apiPrefix,
      apiVersion: appConfig.apiVersion,
    },
    'Bootstrap',
  );

  return app;
}
