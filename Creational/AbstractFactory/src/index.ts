import Client from './vehicles/Client';
declare var process;

let type = process.argv[2]
let vehicleType = process.argv[3]



try{
    const client = new Client(type);
    client.startRoute(vehicleType);
}catch(error){
    console.error(error.message,500)
}


 