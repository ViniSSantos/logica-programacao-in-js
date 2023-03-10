        //Metodo Push em Array

let carros = [
    'Honda Civic',
    'Corolla',
    'Hb20',
    'Onix',
    'S10'
];

for(i = 0; i < carros.length; i++){
    console.log('Antes do Push: '+ carros[i]);
}
carros.push('Renaul Kwid', 'VW Kombi');

console.log('---------------------------------------------');

//Podemos acrescentar com o "Push".

for(i = 0; i < carros.length; i++)
console.log('Depois do Push: '+ carros[i]); //Array mais o Indice


