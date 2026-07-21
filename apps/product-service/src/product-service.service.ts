import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

export interface ProductServiceInformation {
  service: string;
  status: string;
  version: string;
}

@Injectable()
export class ProductServiceService {
  constructor(private readonly logger: PinoLogger) {
    this.logger.setContext(ProductServiceService.name);
  }
  getServiceInformation(): ProductServiceInformation {
    this.logger.info(
      {
        operation: 'get_service_information',
      },
      'Retrieving Product Service information',
    );

    return {
      service: 'product-service',
      status: 'running',
      version: '1.0.0',
    };
  }
}
