import { Driver } from './classes/Driver.js';
import { Passenger } from './classes/Passenger.js';

const motorista1 = new Driver('Maria', 43);
const motorista2 = new Driver('Jose', 36);
const motorista3 = new Driver('Marta', 26);
const motorista4 = new Driver('Ana', 32);
const motorista5 = new Driver('Paula', 19);



const passageira1 = new Passenger('Luara', 27, 111);
const passageira2 = new Passenger('Erica', 15, 222);
const passageira3 = new Passenger('Claudia', 25, 333);

/* 
resultado:
[
  { name: 'Luara', age: 27 },
  { name: 'Erica', age: 15 },
  { name: 'Claudia', age: 25 }
]

*/


//console no atributo statico , LISTA no array
console.log(Driver.drivers);
/*
resultado:
[
  { name: 'Maria', age: 43 },
  { name: 'Jose', age: 36 },
  { name: 'Marta', age: 26 },
  { name: 'Ana', age: 32 },
  { name: 'Paula', age: 19 }
]
*/




//console no atributo statico , LISTA no array
console.log(Passenger.passengers);


Driver.numberOfDrivers(); //A quantidade de motoristas cadastradas é 5.
Passenger.numberOfPassengers();//A quantidade de passageiras cadastradas é 3

Driver.ageAverage();//A média da idade das motoristas é 31.20.
Passenger.ageAverage(); //A média da idade das passageiras é 22.33.