import { Controller, Get } from '@nestjs/common';
import {
  type ProductServiceInformation,
  ProductServiceService,
} from './product-service.service';

@Controller({
  path: '',
  version: '1',
})
export class ProductServiceController {
  constructor(private readonly productServiceService: ProductServiceService) {}

  @Get()
  getServiceInformation(): ProductServiceInformation {
    return this.productServiceService.getServiceInformation();
  }
}
