let condicao = true;

let animal;
console.log(animal);
//->Undefined

if(condicao){//Cheaca se ((condição)true) é igual a ((TRUE)primeiro se é verdadeiro) : se não false da Esquerda
    animal = "verdadeiro"       //Na primeira condição checa se é iagual a True verdadeiro
}else{
    animal = "falsificado"
}
console.log(animal);

//Operadores ternarios
// (condição) ? (se é Verdadeiro ele Entra Aqui) : (Se é falso ele Entra Aqui)

animal = condicao ? 'É animal SIM true' : 'Não é um animal' //Armazena o resultado da condição na variável

console.log("animal: "+animal);
console.log("condição: "+condicao);

//If else, else if... ternario

const media = 7;
let resultado;

//Usamos ternario quando precisamos ATRIBUIR a uma var o resultado de uma condição.
resultado =
media >= 5 ? 'APROVADO' : media > 8 ? 'APROVADO' : 'REPROVADO'

console.log(resultado);