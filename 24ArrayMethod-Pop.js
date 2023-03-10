//      Method Pop
//Exclui o último elemneto do Array

let frutas = [
    'banana',
    'Pera',
    'Cacau',
    'Abacaxi',
    'Maça'
];
//console.log(frutas);

for(i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
frutas.pop()//Excluiu: 'Maça'
frutas.pop()//Excluiu: 'Abacaxi'
frutas.pop()//Excluiu: 'Cacau'

console.log(frutas);
//->(2) ['banana', 'Pera']