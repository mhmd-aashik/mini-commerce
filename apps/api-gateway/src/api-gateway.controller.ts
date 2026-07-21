import { Controller, Get, Req } from '@nestjs/common';
import {
  type ApiGatewayInformation,
  ApiGatewayService,
} from './api-gateway.service';
import type { CorrelatedRequest } from '@app/common';

@Controller({
  path: '',
  version: '1',
})
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get('correlation-test')
  testCorrelation(@Req() request: CorrelatedRequest): {
    correlationId: string;
  } {
    return {
      correlationId: request.correlationId,
    };
  }

  @Get()
  getServiceInformation(): ApiGatewayInformation {
    return this.apiGatewayService.getServiceInformation();
  }
}
