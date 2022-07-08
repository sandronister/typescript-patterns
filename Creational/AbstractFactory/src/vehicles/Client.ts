import ITransportFactory from './factories/interface/ITransportFactory';
import { FactoryEnum } from './enum/factory.enum';
import NineNineTransport from './factories/NineNineTransport';
import UberTransport from './factories/UberTransport';
import { TypeEnum } from './enum/type.enum';
import { LimeTransport } from './factories/LimeTransport';

export default class Client{

    private factory:ITransportFactory;

    constructor(type:FactoryEnum){
        if(type==FactoryEnum.NINE_NINE){
            console.log("Star Nine Nine");
            this.factory = new NineNineTransport();
            return;
        }

        if(type==FactoryEnum.UBER){
            console.log("Start Uber");
            this.factory = new UberTransport();
            return; 
        };

        if(type==FactoryEnum.LIME){
            console.log("Start Lime");
            this.factory = new LimeTransport();
            return;
        }

        throw new Error("Wrong Client inform")
    }

    startRoute(type:TypeEnum):void{
        if(type==TypeEnum.AIR){
            this.startAirRoute()
            return
        }

        if(type==TypeEnum.LAND){
            this.startLandRoute()
            return 
        }

        throw new Error("Wrong Route Type")
    }

    private startLandRoute():void{
        const vehicle = this.factory.createTransportVehicle();
        vehicle.startRoute()
    }

    private startAirRoute():void{
        const vehicle = this.factory.createTransportAirCraft();
        vehicle.startRoute()
    }

}