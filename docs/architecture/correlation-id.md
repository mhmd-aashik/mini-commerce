# Correlation ID

Every HTTP request receives a correlation ID.

## Header

Canonical header:

`X-Correlation-Id`

## Behavior

When the request contains a valid UUID:

- Preserve the incoming value
- Attach it to the request
- Add it to structured logs
- Return it in the response header

When the value is missing or invalid:

- Generate a UUID
- Attach the generated UUID to the request
- Add it to structured logs
- Return it in the response header

## Security

Arbitrary client-provided values are not trusted.

Only UUID-formatted correlation IDs are accepted. Invalid,
ambiguous, or array-valued headers are replaced.

## Logging

Every request-scoped Pino log includes:

- `correlationId`
- request ID
- service name
- environment
- logging context

## Propagation

Future transport adapters must propagate the same ID through:

- gRPC metadata
- Kafka event metadata
- outgoing HTTP headers

HTTP request objects must not be injected into domain services.

## Related identifiers

- `eventId`: identifies one event
- `correlationId`: identifies a distributed workflow
- `causationId`: identifies the action that directly caused an event
