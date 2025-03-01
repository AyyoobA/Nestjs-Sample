import { Inject, Injectable, Scope } from "@nestjs/common";
import { PaymentProvider } from "./payment.interface";

@Injectable()
export class PaymentService {

    constructor(@Inject('PAYMENT_PROVIDER') private paymentProvider : PaymentProvider){}

    pay(amount: number) : string {
       return this.paymentProvider.makePayment(amount)
    }
}