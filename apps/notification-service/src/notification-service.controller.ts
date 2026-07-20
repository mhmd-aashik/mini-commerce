import { Controller, Get } from '@nestjs/common';
import {
  type NotificationServiceInformation,
  NotificationServiceService,
} from './notification-service.service';

@Controller()
export class NotificationServiceController {
  constructor(
    private readonly notificationServiceService: NotificationServiceService,
  ) {}

  @Get()
  getServiceInformation(): NotificationServiceInformation {
    return this.notificationServiceService.getServiceInformation();
  }
}
