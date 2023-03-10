        //Array

let alunos = [
    'Jonas Brtothers',
    'Michael jacson',
    'Rita Lee',
    'Legiao Urbana',
    'Pitty Teixeira'
];

//loop em Array de tamanho definido(já conhecido)
for(var i = 0; i < 5; i++){
    console.log(alunos[i]); //Aqui chama "alunos" e seta o indice(acrescentador)
}


//loop em Array de tamanho indefinido(Não conhecido)
// Array.length
// Array[i]

let produtos = [
    'Chinelo Hawaianas',
    'Achocolatado Nescau',
    'Creme Dental Colgate',
    'Massa Caseira Mossamam',
    'Salsichao Borucia',
    'Pão Frances Cacetinho'
];

for(i = 0; i < produtos.length; i++){ //Enquanto (i)indice for menor(<) que array.tamanho, incrementa(++)
    console.log(produtos[i]);
}