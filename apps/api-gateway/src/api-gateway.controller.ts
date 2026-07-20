import { Controller, Get } from '@nestjs/common';
import {
  type ApiGatewayInformation,
  ApiGatewayService,
} from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get()
  getServiceInformation(): ApiGatewayInformation {
    return this.apiGatewayService.getServiceInformation();
  }
}
