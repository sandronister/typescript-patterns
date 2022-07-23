import Live from './Live';
import IPlatform from '../platforms/IPlatforms';

export default class AdvancedLive extends Live{

    constructor(platform:IPlatform){
        super(platform);
    }

    subtitles():void{
        console.log("Active Subtitle");
    }

    comments():void{
        console.log('Active Comments');
    }
}