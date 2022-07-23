import IPlatform from './IPlatforms';

export default class Facebook implements IPlatform{

     constructor(){
        this.configureRMTP()
        console.log('Facebook: Starting Transmission');
    }

    configureRMTP(): void {
        this.authToken();
        console.log('Facebook: Broadcasting Configuring');
    }

    authToken(): void {
        console.log("Facebook: Application Autorized ");
    }

}