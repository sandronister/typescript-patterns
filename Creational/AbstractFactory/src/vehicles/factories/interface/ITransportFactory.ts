import ILandVehicle from '../../land/interface/ILandVehicle';
import IAircraft from '../../aerial/interface/IAircraft';

export default interface ITransportFactory{
    createTransportVehicle():ILandVehicle;
    createTransportAirCraft():IAircraft;
}