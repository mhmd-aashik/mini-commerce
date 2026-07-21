import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';
import { LoggingModule } from '@app/common';
import { EnvironmentConfigModule } from '@app/config';

@Module({
  imports: [
    EnvironmentConfigModule.forRoot({
      envFilePath: ['.env.order-service'],
    }),

    LoggingModule.forRoot(),
  ],
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
