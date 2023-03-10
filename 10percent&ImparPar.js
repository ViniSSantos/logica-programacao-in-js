// Identificar PAR e IMPAR

//Percent   %


var NumeroInvalido = null;

// Pega o 10 divide por 2, verifica se sobrou restos ou não, caso tenha sobrado retorna o resto, caso não dela sobrado ele retorna 0.

let testeImpraOuPar = 10%2;
let par = 'É "Par" Mesmo!'
console.log(testeImpraOuPar);
//->0;   0 = A Par, explicação acima.

if (testeImpraOuPar == 0) {
    console.log(par); 
} else {
    console.log('Deu erro, não sei o que é'); 
}
// -> let par = 'É "Par" Mesmo!'

function testePercent(){
    if(testeImpraOuPar == 0){
        if(testeImpraOuPar != par){
            return 'É diferente e é "Par".'
        }else{
            return null;
        }
    } 
}
console.log(testePercent()); // () para chamar a funciton
// null