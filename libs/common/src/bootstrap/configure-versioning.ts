import { INestApplication, VersioningType } from '@nestjs/common';

export function configureApiVersioning(
  app: INestApplication,
  defaultVersion: string,
): void {
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion,
  });
}
