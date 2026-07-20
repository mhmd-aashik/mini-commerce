import { Test, TestingModule } from '@nestjs/testing';
import { NotificationServiceController } from './notification-service.controller';
import { NotificationServiceService } from './notification-service.service';

describe('NotificationServiceController', () => {
  let notificationServiceController: NotificationServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificationServiceController],
      providers: [NotificationServiceService],
    }).compile();

    notificationServiceController = app.get<NotificationServiceController>(
      NotificationServiceController,
    );
  });

  describe('root', () => {
    it('should return the Notification Service information', () => {
      expect(notificationServiceController.getServiceInformation()).toEqual({
        service: 'notification-service',
        status: 'running',
        version: '1.0.0',
      });
    });
  });
});
