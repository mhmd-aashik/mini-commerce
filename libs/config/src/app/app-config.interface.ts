export type NodeEnvironment = 'development' | 'test' | 'staging' | 'production';

export type LogLevel = 'error' | 'warn' | 'log' | 'debug' | 'verbose';

export interface AppConfig {
  nodeEnv: NodeEnvironment;
  name: string;
  port: number;
  logLevel: LogLevel;
}
