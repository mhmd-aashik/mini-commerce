import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { EnvironmentConfigModule } from '@app/config';
import { LoggingModule } from '@app/common';

@Module({
  imports: [
    EnvironmentConfigModule.forRoot({
      envFilePath: '.env.api-gateway',
    }),
    LoggingModule.forRoot(),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
