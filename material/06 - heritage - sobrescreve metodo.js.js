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
   //se passar esses parâmetros email e password terei que passa-lo tambem na chamada do super la em baixo
    // email;
    // password;
  // exemplo:   super(name, age, email, password);
      
    constructor(name, age, email, password) {
      //ao inves de fazer assim:
      //  this.name = name;
      //this.age = age;
      //sobrescrever o construtor da classe pai usando super
      //chama o construtor da classe herdeira usando a palavra super
      //dentro do super passas os parâmetros que estão sendo chamados no construtor
      //OBRIGATORIAMENTE PEGA TODOSO OS ATRIBUTOS DA CLASSE MÃE
      //a palavra super vem de super classe, por que a classe mãe pode ser chamada de super classe
      //dentro do construtor o SUPER É A PRIMEIRA COISA QUE PRECISA SER CHAMADA
//SE NÃO CHAMAR O SUPER DARÁ ERRO
//SÓ FAZ SOBRESCRITA DE CONSTRUTOR SE TIVE ATRIBUTOS A MAIS. ALEM DOS QUE A CLASSE MÃE TEM
//SE NÃO PRECISA de sobrescrita CHAMA DESSA FORMA: 
/* 
class User extends Person {
  teste(){
    this.name = name;
    this.age = age;
  }
}

*/
      super(name, age); //? se esquecer algum parâmetro no super ele vai exisistir, mas
      //? esse parâmetro esquecido vira como "undefined"
      
      //parâmetros exclusivos da classe User
      this.email = email;
      this.password = password;
    }


    //!SOBRESCREVE O MÉTODO
    speak() {
      console.log(`A usuária de nome ${this.name} está falando`);
    }
    
    

  }
  
  //CRIAR USUÁRIO
  const user1 = new User('Luara', 28, 'luara@email.com', 123);
  console.log(user1)
  user1.speak();



  // ! SE DENTRO DO CONSTRUTOR EU PASSAR  FALTANDO UM PARÂMETRO
  // ! super(name);
 // ! IDADE RETORNARA UNDEFINED
  // !  
  // ! User {
 // !  name: 'Luara',
  // ! age: undefined,
 // !  email: 'luara@email.com',
 // !  password: 123
// ! }
// ! A pessoa de nome Luara está falando


  


