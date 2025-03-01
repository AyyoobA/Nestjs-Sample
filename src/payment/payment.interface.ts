export interface PaymentProvider {
    makePayment(amount: number) : string;
}