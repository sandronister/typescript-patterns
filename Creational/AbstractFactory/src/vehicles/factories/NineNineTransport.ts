import IAircraft from '../aerial/interface/IAircraft';
import ILandVehicle from '../land/interface/ILandVehicle';
import ITransportFactory from './interface/ITransportFactory';
import Motorcycle from '../land/Motorcycle';
import Helicopter from '../aerial/Helicopter';

export default class NineNineTransport implements ITransportFactory{

    createTransportVehicle(): ILandVehicle {
        return new Motorcycle();
    }
    createTransportAirCraft(): IAircraft {
        return new Helicopter();
    }

}