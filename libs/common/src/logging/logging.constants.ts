export const REDACTED_LOG_VALUE = '[REDACTED]';

export const SENSITIVE_LOG_PATHS = [
  'req.headers.authorization',
  'req.headers.cookie',
  'req.headers["x-api-key"]',
  'res.headers["set-cookie"]',

  'authorization',
  'cookie',
  'password',
  'passwordConfirmation',
  'currentPassword',
  'newPassword',
  'accessToken',
  'refreshToken',
  'apiKey',
  'secret',
  'clientSecret',
] as const;
