//Operadores Lógico são: 
//Igualdade ==, Diferença !=, AND &&, OR ||, NOT !


//operador lógico       Condição        Condição    Resultado

//AND ou &&               true            true         true
//AND ou &&               false           true         false
//AND ou &&               true            false        false
//AND ou &&               false           false        false


//operador lógico       Condição        Condição        Resultado
//OR ou ||                true            true            true
//OR ou ||                false           true            true
//OR ou ||                true            false           true
//OR ou ||                false           false           false


//operador lógico       Condição        Condição        Resultado
//NOT ou !               !true            true            true
//NOT ou !                false           true            true
//NOT ou !               !true            false           true
//NOT ou !                false           false           false

var numUm =1;
var num1 = 1;
var num2 = 1;
//var num3 = 1; //->Nao caio aqui, sou false, na real.
var num3 = 3;

//Operador Lógico && "E"

if(num1 == num2 && num1 == num3){
    console.log('Nao caio aqui, sou false, na real.');
}else{ 
    console.log('Já esperava por isso');
};


//Operador lógico || "OU"

if(num1 == num2 && num2 == numUm){
    console.log('Paro por aqui');
}else{
    return null;
}

//Operador lógico ! "Negação"

if(!(num1 == num3)){    // ao lado de FORA do parenteses " ! "      if(!(var))
    console.log('Sou de Negação, caio aqui');
}else{
    console.log(true);
}