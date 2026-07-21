# Environment Configuration

Each application owns a separate environment file.

## Local files

- `.env.api-gateway`
- `.env.product-service`
- `.env.order-service`
- `.env.notification-service`

These files are ignored by Git.

## Example files

- `.env.api-gateway.example`
- `.env.product-service.example`
- `.env.order-service.example`
- `.env.notification-service.example`

Example files document required variables and may be committed.

## Required variables

- `NODE_ENV`
- `APP_NAME`
- `PORT`
- `LOG_LEVEL`

## Validation

Environment variables are validated during application startup using Joi.

An application must not start when required configuration is missing or
invalid.

## Production

Production deployments must provide environment variables through the
deployment platform, container system, or secret manager. Production secrets
must not be committed to source control.
