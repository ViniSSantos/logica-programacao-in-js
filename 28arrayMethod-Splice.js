//      Slpice      .splice()
// Adicionar ou Remover de array por indice com intervalo

let escritorio = [
    'cadeira',
    'mesa',
    'pc',
    'monitor',
    'fone',
    'teclado',
    'nobreak',
    'café'
];

//console.log(escritorio.splice(0)); //-> .splice e 0    Percorre, lê o arrya e conta(length)


//console.log(escritorio.slice(0, 4, 'mouse', 'caneta'));
console.log(escritorio);//->(4) ['cadeira', 'mesa', 'pc', 'monitor']

//1º Parametro: Onde começa     2ºParametro: Quantos ele sobrescreve
escritorio.splice(0,            2)//do i 0 exclui 2 itens
//escritorio.splice(0, 2)

console.log(escritorio)

console.log('--------------------------------')

//1º Parametro: Onde começa     2ºParametro: Quantos ele sobrescreve
escritorio.splice(2,            2, 'abc', 'def'); //(0,0, 'a') add no inicio do array
//escritorio.splice(2, 2, 'abc', 'def');

console.log(escritorio);//-.(6) ['pc', 'monitor', 'abc', 'def', 'nobreak', 'café']

//method length

console.log('Tamanho do array escritorio é: ' + escritorio.length);