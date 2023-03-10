// Aqui vamos utilizar o return de uma Funciton para alimentar nossa nova Function;

function somar(num1, num2){
    var adicao = num1 + num2;

    return adicao;
}
console.log(somar(2,3));
//var resultado = somar(2,3);

//Utilizar o Retrun

function dividePorDois(num){
    //let divisao = num / 2;
    let divisao = num / 5;

    return divisao
};
//console.log(divisao);->Error
console.log(dividePorDois(20));

var resultado = somar(2,3);
//resultado = (2,3) = 5 
console.log(dividePorDois(resultado));