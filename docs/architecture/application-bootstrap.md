# Application Bootstrap

All HTTP applications use the shared bootstrap function from
`@app/common`.

## Global behavior

The bootstrap function configures:

- Global route prefixes
- URI API versioning
- DTO validation
- Helmet security headers
- CORS where allowed
- Graceful shutdown hooks
- Startup logging

## API Gateway

The API Gateway uses:

- Prefix: `api`
- Default version: `1`
- CORS: enabled

Example route:

`/api/v1/products`

## Internal services

Internal services use:

- Prefix: `internal`
- Default version: `1`
- CORS: disabled

Example temporary route:

`/internal/v1`

## Validation

Global validation uses:

- `whitelist: true`
- `forbidNonWhitelisted: true`
- `transform: true`
- implicit conversion disabled

DTOs must explicitly declare validation and transformation behavior.

## Shutdown

Shutdown hooks are enabled for `SIGINT` and `SIGTERM`.

Infrastructure adapters must later close database, Redis, Kafka,
OpenSearch, and gRPC connections during application shutdown.
