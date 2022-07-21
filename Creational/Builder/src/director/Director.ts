import IBuilder from '../builders/IBuilder';
import VehicleType from '../components/VehicleType';
import Transmission from '../components/Transmission';
import Engine from '../components/Engine';
import Wheel from '../components/Wheel';
export default class Director{

    constructor(private builder:IBuilder){}

    constructSedan(){
        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeats(5);
        this.builder.setTransmission(Transmission.CVT);
        this.builder.setEngine(new Engine(2000));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
    }

    constructTruck(){
        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeats(3);
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(13000));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22)); 
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22)); 
    }

    constructMotoCycle(){
        this.builder.setVehicleType(VehicleType.MOTOCYCLE);
        this.builder.setSeats(1);
        this.builder.setTransmission(Transmission.MANUAL);
        this.builder.setEngine(new Engine(400));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
    }
}