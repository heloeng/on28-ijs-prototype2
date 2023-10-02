class Animal {
    type;
    name;
    age;
    // hungry = 0;
    //atributo estatico pertence ao objeto
    static animals = [];

    constructor(type, name, age, hungry) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.hungry = hungry;
        // this.constructor.animals.push(name);//salvar os nomes do objeto, criados, no array.
        // this.constructor.animals.push({name: name, type: type});//salvar os nomes do objeto, criados, no array.
        this.constructor.animals.push({ name, type, hungry });//salvar os nomes do objeto, criados, no array.
        //ou  Animal.animals.push(name);
    }
    eat(value) {
        console.log(`o animal chamado ${this.name} está comendo`);
        this.hungry -= value;
        const indexFounded = Animal.animals.findIndex((animal) => animal.name === this.name);
        //pega [indexFounded].hungry dessa fome e atualiza para  "this.hungry;""
        
       if(indexFounded === -1){
        console.log('Animal não encontrado');
        return;
       }
        Animal.animals[indexFounded].hungry = this.hungry;
    }

    static nexToEat() {
        const sortedAnimails = Animal.animals.sort((a, b) => b.hungry - a.hungry);
        console.log(`O proximo animal que precisa comer é ${sortedAnimails[0].name}`)
       //se não achar retorna -1

    }
}

console.log(Animal.animals)
const animal1 = new Animal('cachorro', 'Aslam', 3, 50);
const animal2 = new Animal('gato', 'Pipoca', 2, 100);
const animal3 = new Animal('papagaio', 'Mocinho', 1, 40);
console.log(Animal.animals);

animal1.eat(10); //dei de comer
animal2.eat(80);
animal3.eat(15);

console.log(Animal.animals);
// console.log(animal1)
// console.log(animal2)
// console.log(animal3)

Animal.nexToEat()