import { Module } from '@nestjs/common';
import { NotificationServiceController } from './notification-service.controller';
import { NotificationServiceService } from './notification-service.service';
import { LoggingModule } from '@app/common';
import { EnvironmentConfigModule } from '@app/config';

@Module({
  imports: [
    EnvironmentConfigModule.forRoot({
      envFilePath: ['.env.notification-service'],
    }),

    LoggingModule.forRoot(),
  ],
  controllers: [NotificationServiceController],
  providers: [NotificationServiceService],
})
export class NotificationServiceModule {}
