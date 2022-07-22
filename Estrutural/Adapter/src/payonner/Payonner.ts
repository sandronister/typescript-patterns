import token from '../utils/token';
import IPayonnerPayment from './IPayonnerPayments';
import Token from '../utils/token';

export default class Payonner implements IPayonnerPayment{

    private token:Token;

    authToken(): Token {
        return new Token()
    }
    
    sendPayment(): void {
        this.token = this.authToken();
        console.log(`Token ${this.token.getToken()}`);
        console.log('Payonner Payment');
    }

    receivePayment(): void {
        this.token = this.authToken();
        console.log(`Token ${this.token.getToken()}`);
        console.log('Payonner Receive'); 
    }

}