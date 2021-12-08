console.log("Olá!! Estou funcionando!!");

//Var, Let e Const
var a = 2;

let b = 3;

const pi = 3.14;

console.log(a, '--> a');
console.log(b, '--> b');
console.log(pi, '--> pi');

a = 5;
b = 7;

//Não podemos alterar o valor de uma variável do tipo const.

console.log(a, '--> a');
console.log(b, '--> b');
console.log(pi, '--> pi');

//Tipos de Dados que eu posso ter numa variável

//Number - Numero, Duh
let nota = 10;

//String - Texto
let nome = "César"
let sobrenome = 'Martins'

//Undefined - Quando a variável não foi definida
let d;
console.log(d, "--> d")

//Posso atribuir um valor para uma variável undefined. Aí ela passa a ter um valor definido.
d = 17;
console.log(d, "--> d")

//Atribuir uma String à uma variável que seja um Number
d = "Dadinho";
console.log(d, "--> d")

//Null - Nulo
let cep = null;
console.log(cep, '--> cep');


//Booleana - True or False
let verdadeiro = true;
let falso = false;

console.log(verdadeiro, '--> vdd')
console.log(falso, '--> falso')

verdadeiro = false;
falso = true;

console.log(verdadeiro, '--> vdd')
console.log(falso, '--> falso')

//Concatenação
let preco = 349.90;
let produto = "Tenis Nadidas";

console.log("O valor do " + produto + " é R$" + preco);

console.log(nome + " " + sobrenome);

//Operadores Matemáticos
//Adição --> +

a = b+2;
console.log(a, "--> a = b+2");

//Subtração --> -
a = b-2;
console.log(a, '--> a = b-2');

//Multiplicação --> *
a = b*2;
console.log(a, "a = b*2");

//Divisão --> /
a = b/2;
console.log(a, "a = b/2");

//Resto da Divisão --> %
a = b%2;
console.log(a, "a = b%2");

let y = 2;
let x = "2";

let z = y+2;
let w = y + "2";
let k = x + "2";

console.log(z, "z");
console.log(w, "w");
console.log(k, "k");

//OPERADORES LÓGICOS
// Igualdade --> ==

console.log(x == y, 'x == y');

//Igualdade Estrita --> ===

console.log(x === y, 'x === y');

//Diferença
console.log(x != y, 'x != y');

//Diferença Estrita
console.log(x !== y, 'x !== y');

// Maior que
console.log( z > x, "z > x");

//Menor ou igual a
console.log( x <= y, "x < y");








