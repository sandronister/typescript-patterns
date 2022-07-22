import Token from '../utils/token';
import token from '../utils/token';
import { IMercadoPago } from './IMercadoPago';

export default class MercadoPago implements IMercadoPago{

    private token:Token;
    
    authToken(): token {
        return new Token();
    }

    sendMLPayment(): void {
        this.token = this.authToken();
        console.log(`Token ${this.token.getToken()}`);
        console.log('Mercado Pago Payment');
    }
    receiveMLPayment(): void {
        this.token = this.authToken();
        console.log(`Token ${this.token.getToken()}`);
        console.log('Mercado Pago Receive');
    }

}