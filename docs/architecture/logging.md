# Logging

The platform uses Pino through `nestjs-pino`.

## Output formats

Development:

- Pretty console output
- Controlled using `LOG_PRETTY=true`

Production:

- Structured JSON
- Use `LOG_PRETTY=false`

## Required metadata

Application logs should include:

- Service name
- Environment
- Logging context
- Operation name where useful
- Relevant entity identifiers
- Error object when an operation fails

## Log levels

- `fatal`: unrecoverable process failure
- `error`: failed operation
- `warn`: unexpected but recoverable condition
- `info`: meaningful normal activity
- `debug`: development diagnostics
- `trace`: highly detailed diagnostics
- `silent`: disables logs

## Sensitive information

The following must not be logged:

- Passwords
- Access tokens
- Refresh tokens
- Authorization headers
- Session cookies
- API keys
- Client secrets
- Payment information
- Complete personal records

Configured sensitive paths are replaced with `[REDACTED]`.

## Structured logging

Preferred:

```typescript
logger.info(
  {
    operation: 'update_product',
    productId,
  },
  'Product updated',
);
```
