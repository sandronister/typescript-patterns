import IPlatform from './IPlatforms';

export default class Twitch implements IPlatform{


    constructor(){
        this.configureRMTP()
        console.log('Twitch: Starting Transmission');
    }

    configureRMTP(): void {
        this.authToken();
        console.log('Twitch: Broadcasting Configuring');
    }

    authToken(): void {
        console.log("Twitch: Application Autorized ");
    }

}