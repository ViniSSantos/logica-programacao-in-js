//For Aninhado

for(i= 100; i >= 0; i--){
    console.log("Estou Decrescendo 1 de 100: "+i);
}

//Aninhar loops de repetição

for(x = 0; x <= 10; x++){
    console.log('Primeiro for "X" ficou: '+x);
    for(y = 0; y <= 5; y++){
        console.log('Y é: '+ y);
        console.log('X = '+ x +' Y = '+ y);
    }
}