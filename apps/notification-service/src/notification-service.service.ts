import { Injectable } from '@nestjs/common';

export interface NotificationServiceInformation {
  service: string;
  status: string;
  version: string;
}

@Injectable()
export class NotificationServiceService {
  getServiceInformation(): NotificationServiceInformation {
    return {
      service: 'notification-service',
      status: 'running',
      version: '1.0.0',
    };
  }
}
