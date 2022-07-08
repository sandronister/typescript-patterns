import IAircraft from '../aerial/interface/IAircraft';
import ILandVehicle from '../land/interface/ILandVehicle';
import ITransportFactory from './interface/ITransportFactory';
import Car from '../land/Car';
import Airplane from '../aerial/Airplane';

export default class UberTransport implements ITransportFactory{

    createTransportVehicle(): ILandVehicle {
        return new Car();
    }
    createTransportAirCraft(): IAircraft {
        return new Airplane();
    }


}