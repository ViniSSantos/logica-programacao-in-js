            //Functions
//Pode ser COM ou PARÂMETROS


//Func. Basica sem parâmetro
function exibirTexto(){
    console.log('Imprimir texto na tela');
}
console.log(exibirTexto()); // Invocar a Função = Chamar a função


//Invocar Funcitom com Parâmetro

function exibirParametro(nome){
    console.log('Meu parametro nome é: '+ nome);
}
console.log(exibirParametro('Vinicius'));

//Desafio: Function que some 2 numeros e exiba

function somaEles(num1, num2){
  // numeros = num1 + num2;
  console.log('Soma eles fica: '+ (num1 + num2));
}
console.log(somaEles(2, 2));
//console.log(numeros);
//->4


//Desafio: Soma e Subtrai 

function somaElesSubtrai(num1, num2, num3){
    // numeros = num1 + num2;
    console.log('Soma eles fica: '+ ((num1 + num2) - num3));
}
console.log(somaElesSubtrai(2, 2, 2));
//Soma eles fica: 2     (2+2 = 4-2 = 2)
