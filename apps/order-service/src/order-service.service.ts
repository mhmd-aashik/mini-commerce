import { Injectable } from '@nestjs/common';

export interface OrderServiceInformation {
  service: string;
  status: string;
  version: string;
}

@Injectable()
export class OrderServiceService {
  getServiceInformation(): OrderServiceInformation {
    return {
      service: 'order-service',
      status: 'running',
      version: '1.0.0',
    };
  }
}
