// console.log("Olá!! Estou funcionando!!");

// //Var, Let e Const
// var a = 2;

// let b = 3;

// const pi = 3.14;

// console.log(a, '--> a');
// console.log(b, '--> b');
// console.log(pi, '--> pi');

// a = 5;
// b = 7;

// //Não podemos alterar o valor de uma variável do tipo const.

// console.log(a, '--> a');
// console.log(b, '--> b');
// console.log(pi, '--> pi');

// //Tipos de Dados que eu posso ter numa variável

// //Number - Numero, Duh
// let nota = 10;

// //String - Texto
// let nome = "César"
// let sobrenome = 'Martins'

// //Undefined - Quando a variável não foi definida
// let d;
// console.log(d, "--> d")

// //Posso atribuir um valor para uma variável undefined. Aí ela passa a ter um valor definido.
// d = 17;
// console.log(d, "--> d")

// //Atribuir uma String à uma variável que seja um Number
// d = "Dadinho";
// console.log(d, "--> d")

// //Null - Nulo
// let cep = null;
// console.log(cep, '--> cep');


// //Booleana - True or False
// let verdadeiro = true;
// let falso = false;

// console.log(verdadeiro, '--> vdd')
// console.log(falso, '--> falso')

// verdadeiro = false;
// falso = true;

// console.log(verdadeiro, '--> vdd')
// console.log(falso, '--> falso')

// //Concatenação
// let preco = 349.90;
// let produto = "Tenis Nadidas";

// console.log("O valor do " + produto + " é R$" + preco);

// console.log(nome + " " + sobrenome);

// //Operadores Matemáticos
// //Adição --> +

// a = b+2;
// console.log(a, "--> a = b+2");

// //Subtração --> -
// a = b-2;
// console.log(a, '--> a = b-2');

// //Multiplicação --> *
// a = b*2;
// console.log(a, "a = b*2");

// //Divisão --> /
// a = b/2;
// console.log(a, "a = b/2");

// //Resto da Divisão --> %
// a = b%2;
// console.log(a, "a = b%2");

// let y = 2;
// let x = "2";

// let z = y+2;
// let w = y + "2";
// let k = x + "2";

// console.log(z, "z");
// console.log(w, "w");
// console.log(k, "k");

// //OPERADORES LÓGICOS
// // Igualdade --> ==

// console.log(x == y, 'x == y');

// //Igualdade Estrita --> ===

// console.log(x === y, 'x === y');

// //Diferença
// console.log(x != y, 'x != y');

// //Diferença Estrita
// console.log(x !== y, 'x !== y');

// // Maior que
// console.log( z > x, "z > x");

// //Menor ou igual a
// console.log( x <= y, "x < y");

//----------AULA 7-----//

//Loops - Laços de Repetição

console.log(1);
console.log(2);
console.log(3);

//loop While
// var cont = -10;

// while (cont <= 10){
//     console.log(cont);
//     cont++;
// }

//Loop For
// for (i = 0; i <= 10; i+=2) {
//     console.log("O valor de i é: " + i);
// }

//ARRAYS
var item1 = "tenis"
var item2 = "jaqueta"
var item3 = "boné"

var listaDeCompras = ["tenis", "jaqueta", "boné"];
console.log(listaDeCompras, "Array Lista de Compras");

var notas = [6, 5, 5, 6, 6];
console.log(notas, "Array notas")

var pedido = ["prato do dia", 19.90, "sobremesa", 5, "café", 4.50];
console.log(pedido, "array pedido");

var diasDaSemana = ["segunda", "terça", "quarta", "quinta", "sexta"];
console.log(diasDaSemana)
console.log(diasDaSemana[3]);
console.log(diasDaSemana[0]);
//propriedade Lenght = Tamanho
console.log(diasDaSemana.length, "diasDaSemana.length");
//ultimo elemento de um Array
console.log(diasDaSemana[diasDaSemana.length -1]);

//Métodos dos Arrays
//Array.push
diasDaSemana.push("sábado");
console.log(diasDaSemana, "Array depois do Push");

//Array.pop
diasDaSemana.pop();
console.log(diasDaSemana, "Array depois do Pop");

diasDaSemana[0] = "segunda-feira";
console.log(diasDaSemana, "item subscrito");

//Usando um For para Percorrer um Array
//Problema: Exibir todos os dias da semana no console;

for(i=0; i < diasDaSemana.length; i++){
    console.log("Hoje é: " + diasDaSemana[i]);
}

//Declaração de um Array Vazio
var dias = [];
console.log(dias, "dias")

//Populando um Array com For
for(i=0 ; i<5; i++){
    dias[i] = i;
}

console.log(dias, "dias populado")

//Calculo de Média
console.log(notas, "Array notas");

let somaNotas = 0;
for(i=0; i < notas.length; i++){
    somaNotas = somaNotas + notas[i];
    console.log(somaNotas);
}
let media = somaNotas/notas.length;
console.log("A Média é: " + media);

//ESTRUTURA DE DECISÃO / FLUXO DE CONTROLE / IF
var aprovado = false;

var notaComp = 6;

if (media >= 7 && notaComp >= 7) {
    aprovado = true;
    console.log("Aluno aprovado!!")
    console.log(aprovado, "variavel aprovado")
} else if(media >= 5 && notaComp >= 7){
    aprovado = false;
    console.log("Aluno em Recuperação")
    console.log(aprovado, "variavel aprovado")
} else {
    aprovado = false;
    console.log("Aluno Reprovado!!")
    console.log(aprovado, "variavel aprovado")
}

//OPERADORES E (AND - &&)
true  && true //-->true
true  && false //--> false
false && true //--> false
false && false //--> false


//Banco de Dados
var usuario = "cesar";
var senha = 1234;

//Digitado no Formulário
let formUser = "cesar"
let formSenha = 1234;

if(formUser === usuario && formSenha === senha){
    var login = true;
    console.log("Bem-vindo " + usuario)
} else {
    console.log("Usuário ou senha incorretos!")
}


//OPERADORES OU (OR - ||)
true || true //-->true
true || false //--> true
false || true //--> true
false || false //--> false

if(formUser === usuario || formSenha === senha){
    var login = true;
    console.log("Bem-vindo " + usuario)
} else {
    console.log("Usuário ou senha incorretos!")
}


let userName = "César";
let userLastName = "Martins";






















