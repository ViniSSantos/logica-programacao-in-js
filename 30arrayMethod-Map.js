//      MaP
// Percorre e cria um novo ARRAY à partir do 'Array' anerior.

var numbers = [1,2,3,4,5];

for(i=0; i < numbers.length; i++){
    console.log(numbers[i]);
}

console.log('--------------');

var newArrayMap = numbers.map(function(element){
    element = element + 100;

    return element
    
})

//For Padrão VSCode. 
for (let index = 0; index < newArrayMap.length; index++) {
    const element = newArrayMap[index];
    
    console.log(element);
}
//-> 101, 102, 103, 104, 105.

console.log('----------------------');

//      toUpperCase
var clientes = [
    'Ana',
    'Maria',
    'Cecília',
    'Joana',
    'Marcia'
];

for(i=0; i < clientes.length; i++){
   console.log(clientes[i]);
}

// Map + toUpeerCase
//Cria um novo arra apartir o anterior e altera alguma coisa

var clientesSILVA = clientes.map(function(clientesSILVA){
    //clientesSILVA = clientesSILVA + ' Silva'
    clientesSILVA += ' Silva';
    clientesSILVA = clientesSILVA.toUpperCase() // Transforma tudo em MAIUSCULO

    console.log("clientesSILVA E: "+clientesSILVA);
})

console.log('-----------------');

for(i=0; i < clientesSILVA.length; i++){
    console.log(clientesSILVA[i]);
}
//-> 5 undefined    pq?????