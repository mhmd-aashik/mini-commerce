import { bootstrapHttpApplication } from '@app/common';
import { ProductServiceModule } from './product-service.module';

async function bootstrap() {
  await bootstrapHttpApplication({
    rootModule: ProductServiceModule,
    enableCors: false,
  });
}
void bootstrap();
