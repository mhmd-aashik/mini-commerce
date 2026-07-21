import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppConfig } from '@app/config';
import { BootstrapHttpApplicationOptions } from './bootstrap-options.interface';
import { configureCors } from './configure-cors';
import { configureGlobalValidation } from './configure-validation';
import { configureApiVersioning } from './configure-versioning';
import { configureSecurityHeaders } from './configure-security';
import { configureGracefulShutdown } from './configure-shutdown';

export async function bootstrapHttpApplication(
  options: BootstrapHttpApplicationOptions,
): Promise<INestApplication> {
  const app = await NestFactory.create(
    options.rootModule,
    options.nestApplicationOptions,
  );

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

  Logger.log(
    [
      `${appConfig.name} started`,
      `environment=${appConfig.nodeEnv}`,
      `port=${appConfig.port}`,
      `prefix=${appConfig.apiPrefix}`,
      `version=v${appConfig.apiVersion}`,
    ].join(' | '),
    'Bootstrap',
  );

  return app;
}
