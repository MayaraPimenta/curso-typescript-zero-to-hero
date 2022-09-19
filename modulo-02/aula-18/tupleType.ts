let pessoa: [string, string, number];
pessoa = ['Mayara', 'Dev', 30];
console.log(pessoa);

// ------------

let pessoa1: [string, string, number];
pessoa1 = ['Mayara', 'Dev', 30];
console.log(pessoa1[1]);

// ------------

let listaFrutas: [string, ...string[]] = ['laranja', 'maçã'];
console.log(...listaFrutas);

// ------------

let pessoa2: [nome: string, posicao: string, idade: number];
pessoa2 = ['Mayara', 'Dev', 30];
console.log(pessoa2);

// ------------

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// ------------

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Mayara', 'Mila'], [30, 4]);
console.log(resultado);

// ------------

type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio:string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log(criarPessoa('Mayara', 'Pimenta'));
console.log(criarPessoa('Mayara', 'Pimenta', 'Costa'));

