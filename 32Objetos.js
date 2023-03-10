//      Objetos
//      PARTE I
// É um elemneto computacional que contem alguma entidade
/* 
Formado por um conjuntos de objetos que interagem trocando informações
 que na pratica é quando se invoca um método entre objetos.
*/

//ex: Objeto PC

var pc = {
    marca : 'Dell',
    cor : 'Preto',
    Ram : '8Gb',
    estado : function(mensagem){
        return mensagem;
    },
    processador : 'Intel i7'
}

console.log(pc);
console.log(pc.marca);
//                  -> Passa msg por parâmetro.
console.log(pc.estado('pc está DESLIGADO')); 

//Modificando atributo
pc.cor = 'Branco';

console.log(pc);

//->{marca: 'Dell', cor: 'Preto', Ram: '8Gb', estado: ƒ, processador: 'Intel i7'}




//          Parte II
//Criamos objetos para facilitar e economicar essa QUANTIDADE de INFORMAÇÕ1ES de COMUNICAÇÕES entre uma Classe e outra.

// Formula de criar um herói

let hero = {
    //Key       //Value
    'nome'      : '', // 'nomeSTRING' atributo variável
    'sexo'      : '',
    'espéfice'  : '',
    'capa'      : true,
    poder       :(function(poder){
        return poder;
    }),
};

//Atribuindo ao objeto

//let heroName = hero.nome = 'Batmam';
//console.log(hero.nome);
console.log(hero.poder("ivencibilidade"));
//->invencibilidade
console.log(hero.nome = 'Batmam');
hero.espéfice = 'humano';


console.log(hero);//->{nome: '', sexo: '', espéfice: '', capa: true, poder: ƒ}
console.log(JSON.stringify(hero));//JSONstringify NÂO RETORNA FUNCTION

// hero =
//-> {"nome":"Batmam","sexo":"","espéfice":"humano","capa":true}



//      PARTE III

//ex: 1.
let automacao = {
    tipo        : '',
    aparelho    : '',
    //Vamos trocar parametros entre a função e o escopo global.
    funcao      : function(parametro, parametro2){
        return  'Esse é um tipo de automacao '+ automacao.tipo + 'para '+ parametro + parametro2
    }

}
automacao.tipo = 'Residencial '
automacao.aparelho = 'Arduino'


//Passando parametro para funcão acima

//                          parmetro I          parametro II
console.log(automacao.funcao('ligar as luzes', 'da sua casa.'));
//->Esse é um tipo de automacao Residencial para ligar as luzes



//ex 2.
//troca de info via parametro
let animal = {
    nome        : '',
    tipo        : '',
    //                  recebe valor lá de baixo no parametro
    alimentar   : function(comida, sabor){
        return 'Esse' + animal.nome + 'se alimenta com ' + comida + sabor
    }, 
    sono        : function(status){
        return 'O' + animal.nome + 'está' + status

    }    
}
animal.nome = ' Biruta ';
animal.tipo = ' Cão ';

//Atribuindo valor a um parâmetro
animal.sabor = ' de carne.'

console.log(animal.alimentar(' ração' , animal.sabor));//var comida
console.log(animal.sono(' Dormindo'));//var status
