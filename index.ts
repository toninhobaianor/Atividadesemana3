import { adicionarProduto, listarProdutos, pesoTotal, removerProdutos, valorTotal } from "../Atividadesemana3/Controllers/controleEstoque"
import { Data } from "../Atividadesemana3/Model/interfaceData";

var loop = 0;
const main = async () =>{
    while(loop == 0){
    console.log("digite 0 para sair do Sistema");
    console.log("digite 1 para Adicionar Produto");
    console.log("digite 2 para Listar os produtos");
    console.log("digite 3 para Remover Produtos");
    console.log("digite 4 para Calular o valor total dos Produtos");
    console.log("digite 5 para Calcular o peso total dos Produtos");

    const prompt_comand = require('prompt-sync')({sigint: true});
    var entrada = prompt_comand('Digite a ação desejada: ');
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
                break;
            case 3:
                var name = prompt_comand('Digite o nome do produto que quer remover: ');
                await removerProdutos(name);
                break;
            case 4:
                await valorTotal();
                break;
            case 5:
                await pesoTotal();
                break;
            case 0:
                break;
        }
        if(W == 0){
            loop = 1;
        }
    }
}

main();