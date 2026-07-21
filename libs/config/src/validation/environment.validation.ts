import Joi from 'joi';

export const environmentValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'staging', 'production')
    .default('development'),

  APP_NAME: Joi.string().trim().min(2).max(100).required(),

  PORT: Joi.number().port().required(),

  LOG_LEVEL: Joi.string()
    .valid('error', 'warn', 'log', 'debug', 'verbose')
    .default('log'),

  API_PREFIX: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9-_]+$/)
    .default('api'),

  API_VERSION: Joi.string()
    .trim()
    .pattern(/^[0-9]+$/)
    .default('1'),

  CORS_ENABLED: Joi.boolean().truthy('true').falsy('false').default(false),

  CORS_ORIGINS: Joi.string().allow('').default(''),
});
