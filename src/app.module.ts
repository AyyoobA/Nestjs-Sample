import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './payment/payment.module';
import { PaymentMethodType } from './type';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    PaymentModule.register(process.env.PAYMENT_METHOD as PaymentMethodType)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
