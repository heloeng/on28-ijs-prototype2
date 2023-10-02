class User {
	name;
	age;
	email;
	#password;

	constructor(name, age, email, password) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.#password = password;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}

    #encryptPassword() {
        return (this.#password = `*** ${this.#password} + ***`);
    }

//recebe parametro
    get password(){
        return this.#password;
    }

    //precisa recebe apenas um parametro

    set password(newPassword){
        this.#password = newPassword
    }
}


const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);

// console.log(user1.name); //Luara
// console.log(user1.age); //27
// console.log(user1.email); //luarakerlen@hotmail.com
// console.log(user1.password); ///123456

// console.log(user1.#password); //ERRO: A propriedade '#password' não é acessível fora da classe 'User' porque tem um identificador privado.ts
// console.log(user1.#encryptPassword()); //ERRO: A propriedade '#encryptPassword' não é acessível fora da classe 'User' porque tem um identificador privado.

//get
console.log(user1.password);

user1.password = 1111 
console.log(user1.password);
//set

