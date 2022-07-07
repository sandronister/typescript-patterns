import IVehicle from './interface/IVehicle'

export default class Bicycle implements IVehicle{

    startRoute(): void {
        this.getCargo()
        console.log("Iniando a entrega do pedido...")
    }
    getCargo(): void {
       console.log("Refeição retirada")
    }

}