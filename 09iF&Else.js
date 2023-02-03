//If e else - SE e SE NÃO - Condiçoes
// <, >, <=, >=, ==, ===, !=,    &&, 

let valorCompras = 28.00;
let meuDinheiro = 17.00;

if(meuDinheiro > valorCompras){
    console.log('Ferrou');
}else{
    console.log('Levo as compras');
}

let gastosDaniel = 5.50 + 50.00 + 8.00 + 5.00;
let joaoGastou = 7.50 + 49.00 + 5.00 + 3.50;
const gastosTotal = gastosDaniel + joaoGastou;
console.log('total de tudo foi : '+ gastosTotal);

let um = 1
let doisIgualUm = 1;



function comparaIfElseIfTrue(){
    if(um < doisIgualUm){
       return false;
    }else if (um == doisIgualUm){ // igual ao valor
        return true;
    }else{
       return 'Nenhum deles'
    }
}
console.log(comparaIfElseIfTrue());
//->True

function comparaIfElseIfString(){
    if(um <= doisIgualUm){          //Tem que bater essa condição
        if(um == doisIgualUm){
            return 'É falso aqui';   // Para entrar nessa condição aqui
        }else{
            return null;
        };
    }else if (um != doisIgualUm){//diferente do valor
        return true;
    }else{
       return 'Nenhum deles';
    };
};
console.log(comparaIfElseIfString());
//->Nenhum deles

function comparaIfElseIfNenhumDeles(){
    if(um < doisIgualUm){          //Tem que bater essa condição
        return false;
    }else if (um != doisIgualUm){//diferente do valor
        return true;
    }else{
       return 'Nenhum deles';
    };
};
console.log(comparaIfElseIfNenhumDeles());
//->Nenhum deles