import { Module } from '@nestjs/common';
import { ProductServiceController } from './product-service.controller';
import { ProductServiceService } from './product-service.service';
import { LoggingModule } from '@app/common';
import { EnvironmentConfigModule } from '@app/config';

@Module({
  imports: [
    EnvironmentConfigModule.forRoot({
      envFilePath: ['.env.product-service'],
    }),

    LoggingModule.forRoot(),
  ],
  controllers: [ProductServiceController],
  providers: [ProductServiceService],
})
export class ProductServiceModule {}
