import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerModule, Params } from 'nestjs-pino';
import { AppConfig } from '@app/config';
import { createPinoLoggerOptions } from './logging-options.factory';

@Module({})
export class LoggingModule {
  static forRoot(): DynamicModule {
    return {
      module: LoggingModule,

      imports: [
        LoggerModule.forRootAsync({
          inject: [ConfigService],

          useFactory: (configService: ConfigService): Params => {
            const appConfig = configService.getOrThrow<AppConfig>('app');

            return createPinoLoggerOptions(appConfig);
          },
        }),
      ],

      exports: [LoggerModule],
    };
  }
}
