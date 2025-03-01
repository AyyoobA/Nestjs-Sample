import { Controller, Get, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly appService: PaymentService){}
    
    @Get('pay')
    pay(@Query('amt') amount: number) : string {
        return this.appService.pay(amount)
    }
}
