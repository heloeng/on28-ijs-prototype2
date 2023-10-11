import { Driver } from './classes/Driver.js';
import { Passenger } from './classes/Passenger.js';

const motorista1 = new Driver('Babi', 38);
const motorista2 = new Driver('Jose', 23);

console.log('motorista 1: ', motorista1);
console.log('motorista 2: ', motorista2);

const passageira1 = new Passenger('Lais', 17, 1111);
const passageira2 = new Passenger('Marta', 34, 2222);
const passageira3 = new Passenger('Dani', 53, 3333);


//NÃO MOSTRA MAIS A SENHA, POIS É UM ATRIBUTO PRIVADO
//MESMO SE TIVE UM GET NÃO MOSTRA COM CONSOLE, SOMENTE SE CHAMAR UM GET
console.log('passageira 1: ', passageira1); //passageira 1:  Passenger { name: 'Lais', age: 17 }
console.log('passageira 2: ', passageira2);//passageira 2:  Passenger { name: 'Marta', age: 34 }
console.log('passageira 3: ', passageira3);//passageira 3:  Passenger { name: 'Dani', age: 53 }

passageira1.changePassword(1234, 7825); // A sua senha atual não corresponde, POIS PASSEI A SENHA ERRADA
passageira1.changePassword(1111, 7825); // Senha alterada com sucesso. Passei a senha certa

passageira1.requestDrive(motorista1, 12, 1111);
passageira1.requestDrive(motorista2, 35, 1111);
passageira2.requestDrive(motorista1, 24, 2222);

console.log('passageira 1: ', passageira1);
console.log('passageira 2: ', passageira2);
console.log('motorista 1: ', motorista1);
console.log('motorista 2: ', motorista2);

console.log('amount da passageira 1: ', passageira1.amountSpent);
console.log('amount da passageira 2: ', passageira2.amountSpent);
console.log('amount da motorista 1: ', motorista1.amountEarned);
console.log('amount da motorista 2: ', motorista2.amountEarned);