import IPlatform from './platforms/IPlatforms';
import Live from './transmission/Live';
import YouTube from './platforms/YouTube';
import Twitch from './platforms/Twitch';
import AdvancedLive from './transmission/AdvancedLive';
import Facebook from './platforms/Facebook';


function startLive(platform:IPlatform){

    console.log('Aguarde');

    const live = new Live(platform);
    

    live.broadcating();
    live.result()
    
}

function startAdvanceLive(platform:IPlatform){

    console.log('Aguarde');

    const live = new AdvancedLive(platform);
    

    live.broadcating();
    live.subtitles();
    live.comments();
    live.result()
   
    
}

startAdvanceLive(new YouTube());
startAdvanceLive(new Twitch())
startAdvanceLive(new Facebook())