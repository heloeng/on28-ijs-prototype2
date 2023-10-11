const numeros = [10, 2, 53, 1, 10, 27];

//pega o primeiro index do primeiro número que aparece maior que 20
const index = numeros.findIndex(numero => numero > 20);
console.log(index); // 2

//pega o primeiro index do primeiro número que aparece maior que 20
const index1 = numeros.findIndex(numero => numero > 0);
console.log(index1);//0

const numeros2 = [-1, 2, 53, 1, 10, 27];
const index2 = numeros2.findIndex(numero => numero > 0);
console.log(index2);//1

//QUANDO NÃO TEM NENHUM INDEX PARA RETORNAR , RETORNA -1
const numeros3 = [-1, 2, 53, 1, 10, 27]; //-1
const index3 = numeros3.findIndex(numero => numero === 0);
console.log(index3);//-1

//OBSERVAÇÃO SE FOSSE FILTER TRARIA TODOS OS INDECES DO ARRAY
//NO CASO O FINDINDEX TRAZ O PRIMEIRO INDICE ECONTRADO E
//ENCERRA A PESQUISA.