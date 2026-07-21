import { DynamicModule, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigModuleOptions,
} from '@nestjs/config';
import { appConfiguration } from './app/app.configuration';
import { environmentValidationSchema } from './validation/environment.validation';

export interface EnvironmentConfigModuleOptions {
  envFilePath: string | string[];
}

@Module({})
export class EnvironmentConfigModule {
  static forRoot(options: EnvironmentConfigModuleOptions): DynamicModule {
    const configOptions: ConfigModuleOptions = {
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: options.envFilePath,
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      load: [appConfiguration],
      validationSchema: environmentValidationSchema,
      validationOptions: {
        abortEarly: false,
        allowUnknown: true,
      },
    };

    return {
      module: EnvironmentConfigModule,
      imports: [NestConfigModule.forRoot(configOptions)],
      exports: [NestConfigModule],
    };
  }
}
