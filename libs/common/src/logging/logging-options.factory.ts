import { AppConfig } from '@app/config';
import { IncomingMessage } from 'node:http';
import { TransportSingleOptions } from 'pino';
import { Options as PinoHttpOptions } from 'pino-http';
import { Params } from 'nestjs-pino';
import { CORRELATION_ID_LOG_PROPERTY } from '../correlation/correlation-id.constants';
import { REDACTED_LOG_VALUE, SENSITIVE_LOG_PATHS } from './logging.constants';
import type { ReqId } from 'pino-http';

interface CorrelatedIncomingMessage extends IncomingMessage {
  correlationId?: string;
  id: ReqId;
}

interface SerializedRequest {
  id?: string | number;
  method?: string;
  url?: string;
}

interface SerializedResponse {
  statusCode?: number;
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

    genReqId(request): string {
      const correlatedRequest = request as CorrelatedIncomingMessage;

      /*
       * The correlation middleware should already have generated
       * and assigned this value before pino-http executes.
       */
      const correlationId =
        correlatedRequest.correlationId ?? crypto.randomUUID();

      correlatedRequest.correlationId = correlationId;

      correlatedRequest.id = correlationId;

      return correlationId;
    },

    customProps(request) {
      return {
        [CORRELATION_ID_LOG_PROPERTY]: (request as CorrelatedIncomingMessage)
          .correlationId,
      };
    },

    redact: {
      paths: [...SENSITIVE_LOG_PATHS],
      censor: REDACTED_LOG_VALUE,
    },

    serializers: {
      req(request: SerializedRequest) {
        return {
          id: request.id,
          method: request.method,
          url: request.url,
        };
      },

      res(response: SerializedResponse) {
        return {
          statusCode: response.statusCode,
        };
      },

      err(error) {
        return {
          type:
            error instanceof Error ? error.constructor.name : 'UnknownError',

          message: error instanceof Error ? error.message : String(error),

          stack: error instanceof Error ? error.stack : undefined,
        };
      },
    },

    customAttributeKeys: {
      req: 'request',
      res: 'response',
      err: 'error',
      responseTime: 'durationMs',
    },

    customSuccessMessage() {
      return 'HTTP request completed';
    },

    customErrorMessage() {
      return 'HTTP request failed';
    },
  };

  return {
    pinoHttp: pinoHttpOptions,
  };
}
