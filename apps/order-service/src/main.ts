import { bootstrapHttpApplication } from '@app/common';
import { OrderServiceModule } from './order-service.module';

async function bootstrap() {
  await bootstrapHttpApplication({
    rootModule: OrderServiceModule,
    enableCors: false,
  });
}
void bootstrap();
