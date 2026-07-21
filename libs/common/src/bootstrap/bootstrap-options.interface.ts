import { Type } from '@nestjs/common';
import { NestApplicationOptions } from '@nestjs/common/interfaces/nest-application-options.interface';

export interface BootstrapHttpApplicationOptions {
  rootModule: Type<unknown>;
  enableCors?: boolean;
  nestApplicationOptions?: NestApplicationOptions;
}
