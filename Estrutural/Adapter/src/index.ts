import IPayPalPayment from './paypal/IPayPalPayment';
import PayPal from './paypal/PayPal';
import { PayonnerAdapter } from './adapters/PayonerAdapter';
import Payonner from './payonner/Payonner';
import MLAdapter from './adapters/MPAdapter';
import MercadoPago from './mercadopago/MercadoPago';

const payment:IPayPalPayment = new MLAdapter(new MercadoPago());

payment.paypalPayment();
payment.paypalReceive()