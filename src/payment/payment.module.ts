import { DynamicModule, Module } from '@nestjs/common';
import { PaymentMethodType } from 'src/type';
import { PayPal } from './paypal';
import { Stripe } from './stripe';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({})
export class PaymentModule {
    static register(paymentMethod: PaymentMethodType) : DynamicModule {
        let provider : any;
        if(paymentMethod === 'paypal') {
            provider = PayPal;
        } else if (paymentMethod === 'stripe') {
            provider =  Stripe;
        }

        return {
            module : PaymentModule,
            providers: [
                {
                    provide: "PAYMENT_PROVIDER",
                    useClass: provider
                },
                PaymentService
            ],
            controllers: [PaymentController],
            exports: ['PAYMENT_PROVIDER']
        }
    }
}
