import { Injectable } from '@nestjs/common';

export interface ProductServiceInformation {
  service: string;
  status: string;
  version: string;
}

@Injectable()
export class ProductServiceService {
  getServiceInformation(): ProductServiceInformation {
    return {
      service: 'product-service',
      status: 'running',
      version: '1.0.0',
    };
  }
}
