// comparação de igualdade de números vs strings

var resultado = "12" == 12; //Se for dois numeros(da esquerda vazio) ele converte e compara como numero
console.log(resultado);
//-> true O.o

var zeroFalse = 0 == false; // 0 é sim igual a false
console.log(zeroFalse);

var umVerdadeiro = 1 == true; //true
console.log(umVerdadeiro);

var umFalse = 1 == "true"; //False - Não converte String só numero igual
console.log(umFalse); 


