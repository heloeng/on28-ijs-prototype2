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

    //get não recebe parâmetro
	get password() {
		//Aqui dentro, podemos ter verificações antes de retornar a senha para quem está pedindo, para tornar a nossa aplicação mais segura
		return this.#password
	}


//set recebe apenas um parâmetro e precisa receber, porque precisa
//alterar o parâmetro que está pedindo, para fazer essa reatribuição
//ESTOU ALTERANDO A SENHA E NÃO ESTOU PEDINDO A SENHA ANTIGA
//PARA FAZER ESSA ALTERAÇÃO.
//MAS CASO PEÇA A SENHA ANTIGA, PARA ALTERAR,  ENTÃO USO UM MÉTODO NORMAL SEM SER SET, PARA RECEBER
//DOIS ATRIBUTO: SENHA NOVA E  SENHA ANTIGO
	set password(newPassword) {
		//Aqui dentro, podemos ter verificações antes de trocar a senha para quem está solicitando a troca, para tornar a nossa aplicação mais segura
		this.#password = newPassword
	}

}
    const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);
	
    //password  é o método get password, não precisa abrir e fechar parentes password()
    console.log(user1.password);  //retorna: 123456

    //quero alterar a senha
    //vou acessar o set password
    user1.password = 789 //
    console.log(user1.password);  //retorna: 789


    // console.log(user1.encryptPassword()); 
