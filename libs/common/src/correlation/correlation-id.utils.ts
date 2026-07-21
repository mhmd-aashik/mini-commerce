import { randomUUID } from 'node:crypto';

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isValidCorrelationId(value: unknown): value is string {
  return typeof value === 'string' && UUID_PATTERN.test(value);
}

export function generateCorrelationId(): string {
  return randomUUID();
}

export function resolveCorrelationId(candidate: unknown): string {
  if (isValidCorrelationId(candidate)) {
    return candidate.toLowerCase();
  }

  return generateCorrelationId();
}
