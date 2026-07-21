import { Request, Response } from 'express';

export interface CorrelatedRequest extends Request {
  correlationId: string;
}

export type CorrelationMiddlewareResponse = Response;
