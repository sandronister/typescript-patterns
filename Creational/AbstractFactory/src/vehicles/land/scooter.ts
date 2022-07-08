import ILandVehicle from './interface/ILandVehicle';

export class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Pronto para andar");
    }

    getCargo(): void {
        console.log("Patinete liberado")
    }

}