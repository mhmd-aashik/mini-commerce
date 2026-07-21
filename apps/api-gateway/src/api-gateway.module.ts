import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { EnvironmentConfigModule } from '@app/config';

@Module({
  imports: [
    EnvironmentConfigModule.forRoot({
      envFilePath: '.env.api-gateway',
    }),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
