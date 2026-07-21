import { bootstrapHttpApplication } from '@app/common';
import { NotificationServiceModule } from './notification-service.module';

async function bootstrap() {
  await bootstrapHttpApplication({
    rootModule: NotificationServiceModule,
    enableCors: false,
  });
}
void bootstrap();
