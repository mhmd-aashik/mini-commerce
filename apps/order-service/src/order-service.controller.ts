import { Controller, Get } from '@nestjs/common';
import {
  type OrderServiceInformation,
  OrderServiceService,
} from './order-service.service';

@Controller({
  path: '',
  version: '1',
})
export class OrderServiceController {
  constructor(private readonly orderServiceService: OrderServiceService) {}

  @Get()
  getServiceInformation(): OrderServiceInformation {
    return this.orderServiceService.getServiceInformation();
  }
}
