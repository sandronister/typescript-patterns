import Token from '../utils/token';

export interface IMercadoPago{
    
    authToken():Token;
    sendMLPayment():void;
    receiveMLPayment():void;

}