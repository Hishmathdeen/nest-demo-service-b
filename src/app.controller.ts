import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger('B-CONTROLLER');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cart-service-b')
  getCartService() {
    this.logger.debug('Cart Service Endpoint Got Triggered');
    return this.appService.cartService();
  }
}
