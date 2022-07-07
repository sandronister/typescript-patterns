import Transport from './transport/Transport';
import CarTransport from './transport/CarTransport'
import MotorcycleTransport from './transport/MotorcycleTransport'
import BikeTranport from './transport/BikeTransoport'

declare var process;

let transport:Transport;

let option = process.argv[2]

function getTransport(option):Transport{
    switch(option){
        case "--uber":
            return new CarTransport()
        case "--log":
            return new MotorcycleTransport()
        case "--eats":
            return new BikeTranport()
        default:
            throw new Error('Selecione a entrega')
    }
}

try{
    transport = getTransport(option);
    transport.startTransport()
}catch(e){
    console.log(e.message)
}

// if(process.argv.includes("--uber")){
//     transport = new CarTransport();
// }else if(process.argv.includes("--log")){
//     transport = new MotorcycleTransport()
// }else{
//     console.error("Selecione o tipo de entrega")
// }

// if(transport){
//     transport.startTransport()
// }