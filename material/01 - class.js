
class FullName {
    firstName;
    lastName;
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}


class Animal {
	constructor(type, fullName, age) {
		if (fullName instanceof FullName) {
			this.type = type;
			this.fullName = fullName;
			this.age = age;
			this.energy = 0;
		} else {
            //lança o erro para o objeto não ser criado
			throw 'O parâmetro fullName precisa ser instância da classe FullName';
		}
	}

	eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	}

	sleep(hours) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += hours;
		console.log(`Energia atual: ${this.energy}`);
	}
}

const fullNameAnimal1 = new FullName('Aslam', 'Rangel');
const animal1 = new Animal('cachorro', fullNameAnimal1, 3);
console.log(animal1);