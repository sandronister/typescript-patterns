import Director from './director/Director';
import VehicleBuilder from './builders/VehicleBuilder';
import Vehicle from './products/Vehicle';

const builder:VehicleBuilder = new VehicleBuilder();
const director:Director = new Director(builder)

director.constructSedan();


const sedan:Vehicle = builder.getVehicle();

console.log(`Criando um veiculo do tipo ${sedan.vehicleType}
com ${sedan.wheelsTotal} rodas`);

director.constructTruck();

const truck = builder.getVehicle();

console.log(`Criando um veiculo do tipo ${truck.vehicleType}
com ${truck.wheelsTotal} rodas`);


director.constructMotoCycle();

const moto = builder.getVehicle();

console.log(`Criando um veiculo do tipo ${moto.vehicleType}
com ${moto.wheelsTotal} rodas`);

