            //While

//Criar uma contagem de 1 a 100
//modo errado, raiz


let somaCem = 1;
somaCem = somaCem + 1;//->2
somaCem = somaCem + 1;//->3
somaCem = somaCem + 1;//->4

console.log(somaCem);
//->4   A soma de todas concatenação


    //While somando de 1 a 100.

//Pode usar para ver quantas parcelas o usuario já pagou
let somaAteCem = 0;

while(somaAteCem <= 100){
    somaAteCem = somaAteCem + 1; //Pega o valor e soma ele mesmo mais 1.
    
    console.log('Percorri e somei um, agora sou: ' + somaAteCem);
}
//Percorri e somei um, agora sou: 100


    //Desafio:
//Fazer uma contagem regressiva de 0 a 100 com while

var cem = 100;

//Enquanto 100 for Maior que 0 (cem >= 0), fica na condiçãp
while(cem >= 0){
    cem--;              // usa o (variavel--)  para subtrair
    console.log(cem);
}
