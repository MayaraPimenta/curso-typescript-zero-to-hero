// enum Idioma {
//     Portugues,
//     Espanhol,
//     Frances,
//     Ingles,
// }
// console.log(Idioma);

// -----------

// enum Dia {
//     Segunda = 'SEG',
//     Terca = 'TER',
//     Quarta = 'QUA',
//     Quinta = 'QUI',
//     Sexta = 'SEX',
// }
// console.log(Dia.Segunda);

// -----------

const enum Comida {
    Hamburguer = 'Hamburguer',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Churrasco = 'Churrasco',
}

function comida(c: Comida) {
    return 'Comidas!';
}
console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// console.log(comida(5));

// -----------

enum Tarefa {
    Todo,
    Progress,
    Done,
};

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabens! Concluida com sucesso!'
};

if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Email enviado');    
}