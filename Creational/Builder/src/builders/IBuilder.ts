import Vehicle from '../products/Vehicle';
import Wheel from '../components/Wheel';
import VehicleType from '../components/VehicleType';
import Engine from '../components/Engine';
import Transmission from '../components/Transmission';

export default interface IBuilder{

    reset():void;
    getVehicle():Vehicle;

    addWheel(wheel:Wheel);
    setVehicleType(value:VehicleType);
    setSeats(seats:number);
    setEngine(engine:Engine);
    setTransmission(transmissiont:Transmission);
}