import { AppConfig } from '@app/config';
import type { IncomingMessage, ServerResponse } from 'node:http';
import type { TransportSingleOptions } from 'pino';
import type { Params } from 'nestjs-pino';
import { REDACTED_LOG_VALUE, SENSITIVE_LOG_PATHS } from './logging.constants';
import { Options } from 'pino-http';

type PinoHttpOptions = Options<
  IncomingMessage,
  ServerResponse<IncomingMessage>,
  never
>;

type RequestWithId = IncomingMessage & {
  id: number | string;
};

interface SerializedRequest {
  id?: string | number;
  method?: string;
  url?: string;
}

interface SerializedResponse {
  statusCode: number;
}

interface SerializedError {
  type: string;
  message: string;
  stack?: string;
}

function createDevelopmentTransport(
  enabled: boolean,
): TransportSingleOptions | undefined {
  if (!enabled) {
    return undefined;
  }

  return {
    target: 'pino-pretty',
    options: {
      singleLine: true,
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  };
}

export function createPinoLoggerOptions(appConfig: AppConfig): Params {
  const pinoHttpOptions: PinoHttpOptions = {
    level: appConfig.logLevel,

    transport: createDevelopmentTransport(appConfig.logPretty),

    base: {
      service: appConfig.name,
      environment: appConfig.nodeEnv,
    },

    redact: {
      paths: [...SENSITIVE_LOG_PATHS],
      censor: REDACTED_LOG_VALUE,
    },

    serializers: {
      req(request: RequestWithId): SerializedRequest {
        return {
          id: request.id,
          method: request.method,
          url: request.url,
        };
      },

      res(response: ServerResponse<IncomingMessage>): SerializedResponse {
        return {
          statusCode: response.statusCode,
        };
      },

      err(error: Error): SerializedError {
        return {
          type: error.constructor.name,
          message: error.message,
          stack: error.stack,
        };
      },
    },

    customAttributeKeys: {
      req: 'request',
      res: 'response',
      err: 'error',
      responseTime: 'durationMs',
    },

    customSuccessMessage(): string {
      return 'HTTP request completed';
    },

    customErrorMessage(): string {
      return 'HTTP request failed';
    },
  };

  return {
    pinoHttp: pinoHttpOptions,
  };
}
