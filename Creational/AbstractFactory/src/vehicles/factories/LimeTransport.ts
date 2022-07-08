import IAircraft from '../aerial/interface/IAircraft';
import ILandVehicle from '../land/interface/ILandVehicle';
import ITransportFactory from './interface/ITransportFactory';
import { Scooter } from '../land/scooter';
import Drone from '../aerial/Drone';

export class LimeTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Scooter();
    }
    createTransportAirCraft(): IAircraft {
        return new Drone();
    }

}