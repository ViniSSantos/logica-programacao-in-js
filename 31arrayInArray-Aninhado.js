//      Array Aninhado

var matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

for (linha=0; linha < matriz.length; linha++){
    //console.log(matriz[linha]);

        //Define uma nova VAR pro Indice =coluna e percorre ++

    for(coluna = 0; coluna < matriz[linha].length; coluna++){
        console.log(matriz[linha][coluna]); // faz o DESaninhamento
    }
}