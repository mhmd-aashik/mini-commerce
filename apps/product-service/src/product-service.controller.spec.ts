import { Test, TestingModule } from '@nestjs/testing';
import { ProductServiceController } from './product-service.controller';
import { ProductServiceService } from './product-service.service';

describe('ProductServiceController', () => {
  let controller: ProductServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductServiceController],
      providers: [ProductServiceService],
    }).compile();

    controller = app.get<ProductServiceController>(ProductServiceController);
  });

  describe('getServiceInformation', () => {
    it('should return the Product Service information', () => {
      expect(controller.getServiceInformation()).toEqual({
        service: 'product-service',
        status: 'running',
        version: '1.0.0',
      });
    });
  });
});
