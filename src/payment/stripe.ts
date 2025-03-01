import { PaymentProvider } from "./payment.interface";

export class Stripe implements PaymentProvider{
    makePayment(amount: number): string {
        return `payment made from Stripe. amount : ${amount ?? 0}`
    }
}