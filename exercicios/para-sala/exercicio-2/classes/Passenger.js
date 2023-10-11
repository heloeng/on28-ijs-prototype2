export class Passenger {
	name;
	age;
	password;
	amountSpent = 0;

	//INICIA O ATRUBUTO STATICO
	static passengers = [];

	constructor(name, age, password) {
		this.name = name;
		this.age = age;
		this.password = password;
		Passenger.passengers.push({ name, age })
		// this.constructor.passengers.push({ name, age }) // Podemos utilizar também dessa maneira
	}

	requestDrive(driver, amount, password) {
		if (!(driver instanceof Driver)) {
			console.log('Motorista inválido!');
			return;
		}
		if (password !== this.password) {
			console.log(`${this.name}, sua senha está incorreta!`);
			return;
		}
		this.amountSpent -= amount;
		driver.runDrive(amount);
	}

	//como está dentro da própria classe
	//não recebe por parâmetro, pois está dentro da própria classe
	//tem acesso direto, a própria classe ja sabe o valor
	//não precisa receber de fora a classe já sabe qual valor.
	//precisa saber o numero de motorista e não  faz sentido chamar essa função dentro do objeto
	//que foi criado. Por que essa fun~ção é algo que deve pertencer a classe
	//A classe que se interessa em saber quantos objetos foram instanciados através dela
	//e por isso faz sentido ser um método estatico
	// e não cada objeto saber disso
	//exemplo: Criei um objeto passageria, A passageira Luara não precisa saber
	//quantas passageiras existem no total

	static numberOfPassengers() {
		console.log(`A quantidade de passageiras cadastradas é ${Passenger.passengers.length}`)
	}


//ÃO PRECISA INICIALIZAR 
	static ageAverage() {
		const totalOfPassengers = Passenger.passengers.length;
		if(totalOfPassengers === 0) return;

		const sumOfAges = Passenger.passengers.reduce((total, passenger) => total + passenger.age, 0);
		const ageAverage = (sumOfAges/totalOfPassengers).toFixed(2);
		console.log(`A média da idade das passageiras é ${ageAverage}.`);
	}
}