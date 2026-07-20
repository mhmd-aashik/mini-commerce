export const SERVICE_NAMES = {
  API_GATEWAY: 'api-gateway',
  PRODUCT_SERVICE: 'product-service',
  ORDER_SERVICE: 'order-service',
  NOTIFICATION_SERVICE: 'notification-service',
} as const;

export type ServiceName = (typeof SERVICE_NAMES)[keyof typeof SERVICE_NAMES];
