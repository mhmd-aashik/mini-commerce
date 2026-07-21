import { Controller, Get } from '@nestjs/common';
import {
  type NotificationServiceInformation,
  NotificationServiceService,
} from './notification-service.service';

@Controller({
  path: '',
  version: '1',
})
export class NotificationServiceController {
  constructor(
    private readonly notificationServiceService: NotificationServiceService,
  ) {}

  @Get()
  getServiceInformation(): NotificationServiceInformation {
    return this.notificationServiceService.getServiceInformation();
  }
}
