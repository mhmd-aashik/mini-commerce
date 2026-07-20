# Folder Structure

The project uses layered microservice architecture.

## Layers

### Presentation

Contains HTTP controllers, gRPC handlers, Kafka consumers, and DTOs.

### Application

Contains commands, queries, use cases, orchestration services, and ports.

### Domain

Contains business entities, value objects, domain events, repository contracts,
enums, and domain exceptions.

### Infrastructure

Contains Prisma repositories, Redis adapters, Kafka producers, gRPC clients,
OpenSearch adapters, and external providers.

## Dependency rule

The domain layer must not depend on infrastructure frameworks.

Infrastructure implements interfaces defined by the domain or application layer.

Each microservice owns its business logic and database.
