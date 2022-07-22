import IPayPalPayment from '../paypal/IPayPalPayment';
import token from '../utils/token';
import MercadoPago from '../mercadopago/MercadoPago';

export default class MLAdapter implements IPayPalPayment{

    constructor(private ml:MercadoPago){}

    authToken(): token {
        return this.ml.authToken()
    }

    paypalPayment(): void {
        this.ml.sendMLPayment();
    }

    paypalReceive(): void {
        this.ml.receiveMLPayment()
    }

}