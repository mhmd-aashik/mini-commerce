export interface StructuredLogContext {
  operation?: string;
  entityId?: string;
  userId?: string;
  durationMs?: number;
  status?: string;
  [key: string]: unknown;
}
