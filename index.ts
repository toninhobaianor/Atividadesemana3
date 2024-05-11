import { adicionarProduto, listarProdutos } from "../Atividadesemana3/Controllers/controleEstoque"
import { Data } from "../Atividadesemana3/Model/interfaceData";

var loop = 0;
const main = async () =>{
    while(loop == 0){

    const prompt_comand = require('prompt-sync')({sigint: true});
    var entrada = prompt_comand('Digite a ação desejada:');
    var W = parseInt(entrada,10);
    
        switch(W){
            case 1:
                var X = prompt_comand('Digite o nome do produto: ');
                var Y = prompt_comand('Digite o peso do produto: ');
                var Z = prompt_comand('Digite o valor do produto: ');
                var Q = prompt_comand('Digite a quantidade do produto: ');

                const dados = {
                    nome: X,
                    peso: parseFloat(Y),
                    valor: parseFloat(Z),
                    quantidade: parseInt(Q,10)
                }as Data

                await adicionarProduto(dados);
                break;
            case 2:
                await listarProdutos();
            case 0:
                break;
        }
        if(W == 0){
            loop = 1;
        }
    }
}

main();