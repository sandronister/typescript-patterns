import ITransmission from './ITransmission';
import IPlatform from '../platforms/IPlatforms';

export default class Live implements ITransmission{

    constructor(private platform:IPlatform){}

    broadcating(): void {
        console.log('Stating Transmission');
        
    }
    result(): void {
        console.log('*************** ON AIR *******************');
        
    }

}