import IPlatform from './IPlatforms';

export default class YouTube implements IPlatform{

    constructor(){
        this.configureRMTP()
        console.log('Youtube: Starting Transmission');
    }

    configureRMTP(): void {
        this.authToken();
        console.log('YouTube: Broadcasting Configuring');
    }

    authToken(): void {
        console.log("YouTube: Application Autorized ");
    }

}