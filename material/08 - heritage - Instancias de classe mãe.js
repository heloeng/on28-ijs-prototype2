class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`A pessoa de nome ${this.name} está falando`);
  }
}

class User extends Person {

  constructor(name, age, email, password) {

    super(name, age);

    this.email = email;
    this.password = password;
  }

  speak() {

    console.log(`A pessoa que está falando é uma usuária.`);
    super.speak();
  }
}


const user1 = new User('Luara', 28, 'luara@email.com', 123);

//verifica se o objeto é instancia da classe filha herdada alguns parâmetros da classe mãe
//classe filha
console.log(user1 instanceof User) //retorno tru

//verifica se o objeto é instancia da classe mãe 
console.log(user1 instanceof Person)//retorno tru

