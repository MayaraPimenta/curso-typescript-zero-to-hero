// Colchetes
let frutas: string[] = ['abacaxi', 'laranja', 'melancia'];
console.log(frutas[2]);

// Array Object
let frutas1: Array<string> = ['abacaxi', 'laranja', 'melancia'];
console.log(frutas1[1]);

//Push
let idiomas: Array<string> = ['portugues', 'ingles', 'espanhol'];
idiomas.push('frances')
console.log(idiomas);

//length
console.log(idiomas.length);

//spread operator
let listaNum: Array<number> = [0, 1, 2, 3, 4, 5];
listaNum = [...listaNum, 6, 7, 8, 9, 10];
console.log(listaNum);

//laço de iteração
let linguagensArr: Array<string> = ['Javascript', 'python', 'php', 'c#'];

function funcaoLinguagens(linguagens:string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArr[i]);
    }
}

funcaoLinguagens(linguagensArr);