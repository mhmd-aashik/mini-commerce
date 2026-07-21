import { NextFunction } from 'express';
import { CORRELATION_ID_HEADER } from './correlation-id.constants';
import {
  CorrelatedRequest,
  CorrelationMiddlewareResponse,
} from './correlation-id.types';
import { resolveCorrelationId } from './correlation-id.utils';

export function correlationIdMiddleware(
  request: CorrelatedRequest,
  response: CorrelationMiddlewareResponse,
  next: NextFunction,
): void {
  const incomingCorrelationId = request.headers[CORRELATION_ID_HEADER];

  const correlationId = resolveCorrelationId(incomingCorrelationId);

  request.correlationId = correlationId;

  response.setHeader(CORRELATION_ID_HEADER, correlationId);

  next();
}
