import token from '../utils/token';
import IPayPalPayment from './IPayPalPayment';
import Token from '../utils/token';

export default class PayPal implements IPayPalPayment{

    private token: Token;

    authToken(): token {
        return new Token();
    }

    paypalPayment(): void {
        this.token = this.authToken();
        console.log(`Token ${this.token.getToken()}`);
        console.log('PayPal Payment');
    }

    paypalReceive(): void {
        this.token = this.authToken();
        console.log(`Token ${this.token.getToken()}`);
        console.log('PayPal Receive');
    }

}