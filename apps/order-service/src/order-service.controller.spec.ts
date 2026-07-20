import { Test, TestingModule } from '@nestjs/testing';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';

describe('OrderServiceController', () => {
  let orderServiceController: OrderServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderServiceController],
      providers: [OrderServiceService],
    }).compile();

    orderServiceController = app.get<OrderServiceController>(
      OrderServiceController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orderServiceController.getServiceInformation()).toEqual({
        service: 'order-service',
        status: 'running',
        version: '1.0.0',
      });
    });
  });
});
