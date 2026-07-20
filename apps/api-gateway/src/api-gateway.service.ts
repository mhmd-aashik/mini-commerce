import { SERVICE_NAMES } from '@app/common';
import { Injectable } from '@nestjs/common';

export interface ApiGatewayInformation {
  service: string;
  status: string;
  version: string;
}

@Injectable()
export class ApiGatewayService {
  getServiceInformation(): ApiGatewayInformation {
    return {
      service: SERVICE_NAMES.API_GATEWAY,
      status: 'running',
      version: '1.0.0',
    };
  }
}
