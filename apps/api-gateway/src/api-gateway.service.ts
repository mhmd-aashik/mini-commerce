import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface ApiGatewayInformation {
  service: string;
  status: string;
  version: string;
  environment: string;
}

@Injectable()
export class ApiGatewayService {
  constructor(private readonly configService: ConfigService) {}
  getServiceInformation(): ApiGatewayInformation {
    return {
      service: this.configService.getOrThrow<string>('app.name'),
      status: 'running',
      version: '1.0.0',
      environment: this.configService.getOrThrow<string>('app.nodeEnv'),
    };
  }
}
