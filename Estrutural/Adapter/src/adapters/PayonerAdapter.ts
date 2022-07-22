import IPayPalPayment from '../paypal/IPayPalPayment';
import token from '../utils/token';
import Token from '../utils/token';
import Payonner from '../payonner/Payonner';

export class PayonnerAdapter implements IPayPalPayment{

    constructor(private payonner:Payonner){}

    authToken(): token {
        return this.payonner.authToken();
    }

    paypalPayment(): void {
        this.payonner.sendPayment();
    }

    paypalReceive(): void {
        this.payonner.receivePayment();
    }

}