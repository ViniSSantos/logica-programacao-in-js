            //Operador de comparação Switch Case

//comparar com 
//1 2 3 4 5 6 7 8
//num1 = 1, 2, 3, 4, 5, 6, 7, 8;


//var num1 = 7;
//->É igual a 7

var num1 = 8;
//->'DEVERIA TER USADO o SWITCH CASE'


//var num1 = 1;
if (num1 == 1) {
    console.log("É igual a 1");
} else if(num1 == 2){
    console.log("É igual a 2");
} else if(num1 == 3){
    console.log("É igual a 3");
} else if(num1 == 4){
    console.log("É igual a 4");
} else if (num1 == 5){
    console.log("É igual a 5");
}else if (num1 == 6){
    console.log("É igual a 6");
} else if(num1 == 7){       ////->É igual a 7
    console.log("É igual a 7");
}else{
    console.log('DEVERIA TER USADO o SWITCH CASE');  //var num1 = 8;
};


//Switch Case
//COMO FUNICIONA: O Swicth vai perguntar, CASE caso vc seja meu parametro, vou entrar. (não sei como/se retorna)
let arrayAlfabeto = 7;  

switch(arrayAlfabeto) {
    case  1:
        console.log('Sim');
        break;
    case 1:
        console.log('Sim');
        break;
    case 1:
        console.log('Sim');
        break;
    case 1:
        console.log('Sim');
        break;
    case 1:
        console.log('Sim');
        break;
    case 1:
        console.log('Sim');
        break;
    default : 
        console.log('Não');
};


//Compara com o mesmo tipo  de variavel**aqui ex 'String'
let arrayAlfa = "a";

switch(arrayAlfa) {
    case  "a":
        console.log('Sim');
        break;
    case "b":
        console.log('Sim');
        break;
    case "c":
        console.log('Sim');
        break;
    case "d":
        console.log('Sim');
        break;
    case "e":
        console.log('Sim');
        break;
    case "f":
        console.log('Sim');
        break;
    default : 
        console.log('Não');
};

//Exemplo co If else if
let nome = 'Maria Pereira';

if(nome == 'João dos Santos'){
    console.log('Nome corre é: '+ nome);

}else if(nome == 'Maria Antonia'){
    console.log('Nome corre é: '+ nome);

}else{
    console.log('Nome correto não Encontrado, Você está procurando por: '+nome);
}


//EX: com SWITCH - CASE - BREAK - DEFAULT

switch(nome){
    case 'Maria Joaquina':
        console.log('Sim');
        break;
    case 'João Pereira' :
        console.log('Sim');
        break;
    case 'Maria Pereira':
        console.log('Sou a : '+nome); //Percorre até encontrar
        break;
    default: // Caso não
        console.log('Nome de '+ nome +' não foi encontrado');
}