import { bootstrapHttpApplication } from '@app/common';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap(): Promise<void> {
  await bootstrapHttpApplication({
    rootModule: ApiGatewayModule,
    enableCors: true,
  });
}

void bootstrap();
