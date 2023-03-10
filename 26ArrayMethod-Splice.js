//      Splice (adicionar e Remover por Indice)

let carros = [
    'Honda Civic',
    'Corolla',
    'Hb20',
    'Onix',
    'S10'
];
console.log(carros.length);
//->5
for(i  = 0; i < carros.length; i++){
    console.log(carros[i]);
}
//Adicionando com Splice

//Primeiro  parametro onde começa a ação    // Segundo parametro a quantidade    //terceiro adicona
var spliceCarros = carros.splice(0, 2, 'H2r 1000') // 0 e 0 adiciona desde o inicio
console.log(carros.length);
console.log(carros);
console.log('------------------');
console.log(spliceCarros); //Aqui guardo o que foi removido ou add
