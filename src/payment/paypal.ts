import { PaymentProvider } from "./payment.interface";

export class PayPal implements PaymentProvider {
    makePayment(amount: number): string {
        return `payment made from Paypal. amount : ${amount ?? 0}`
    }
}