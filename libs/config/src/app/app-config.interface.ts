export type NodeEnvironment = 'development' | 'test' | 'staging' | 'production';

export type LogLevel =
  'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent';

export interface AppConfig {
  nodeEnv: NodeEnvironment;
  name: string;
  port: number;
  logLevel: LogLevel;
  logPretty: boolean;
  apiPrefix: string;
  apiVersion: string;
  corsEnabled: boolean;
  corsOrigins: string[];
}
