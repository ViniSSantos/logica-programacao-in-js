            //Escopos
//Ex: Shopping escopo geral, dentrro tem uma farmacia, dentro da farcacia tem a Perfumária.


var shopping = 'Iguatmi';

function farmacia(){
    var nomeFarmacia = 'Bom Preço'

        function perfumaria(){
            var nomePerfumaria = 'Boticário'

            return farmacia();           
        }

    return nomeFarmacia
}
console.log(shopping);
console.log(farmacia());
//console.log(nomePerfumaria);
