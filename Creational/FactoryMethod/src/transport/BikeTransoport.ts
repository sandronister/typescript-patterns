import Transport from './Transport'
import IVehicle from './vehicle/interface/IVehicle';
import Bicycle from './vehicle/Bicycle';

export default class BikeTranport extends Transport{

    protected createTransport(): IVehicle {
        return new Bicycle();
     }

}