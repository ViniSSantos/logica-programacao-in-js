//      For Each
//Percorrer array

var estacoes = [
    'Outono',
    'Primavera',
    'inverno',
    'Verão'
]; 
/*
function exigibiEstacoes (element, index){
    console.log(element);
    console.log(index);
}
console.log(estacoes.forEach(exigibiEstacoes));
*/

//Consegue definir Indice e Elemento, para percorrer

function exigibiEstacoes (element, index, x){ //->terceiro elemento trás array como ele
    if(/*element*/'Outono' === 'Outono'){
        console.log('Indice: '+index);
        console.log('Elemento: '+element);
       // console.log(x);
        
    }else{
        console.log('Não');
    }
}
console.log(estacoes.forEach(exigibiEstacoes));
/* 
Indice: 0
Elemento: Outono
Indice: 1
Elemento: Primavera
Indice: 2
Elemento: Inverno
Indice: 3
Elemento: Verão
*/