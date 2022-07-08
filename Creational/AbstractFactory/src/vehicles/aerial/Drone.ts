import IAircraft from './interface/IAircraft';

export default class Drone implements IAircraft{

    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Pronto para voar")
    }
    getCargo(): void {
        console.log("Carga acoplada")
    }

    checkWind(): void {
        console.log("Tempo perfeito para voar")
    }

}