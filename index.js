"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const controleEstoque_1 = require("../Atividadesemana3/Controllers/controleEstoque");
var loop = 0;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    while (loop == 0) {
        console.log("digite 0 para sair do Sistema");
        console.log("digite 1 para Adicionar Produto");
        console.log("digite 2 para Listar os produtos");
        console.log("digite 3 para Remover Produtos");
        console.log("digite 4 para Calular o valor total dos Produtos");
        console.log("digite 5 para Calcular o peso total dos Produtos");
        console.log("digite 6 para Calular a media dos valor dos Produtos");
        console.log("digite 7 para Calcular a media dos pesos dos Produtos");
        const prompt_comand = require('prompt-sync')({ sigint: true });
        var entrada = prompt_comand('Digite a ação desejada: ');
        var W = parseInt(entrada, 10);
        switch (W) {
            case 1:
                var X = prompt_comand('Digite o nome do produto: ');
                var Y = prompt_comand('Digite o peso do produto: ');
                var Z = prompt_comand('Digite o valor do produto: ');
                var Q = prompt_comand('Digite a quantidade do produto: ');
                const dados = {
                    nome: X,
                    peso: parseFloat(Y),
                    valor: parseFloat(Z),
                    quantidade: parseInt(Q, 10)
                };
                yield (0, controleEstoque_1.adicionarProduto)(dados);
                break;
            case 2:
                yield (0, controleEstoque_1.listarProdutos)();
                break;
            case 3:
                var name = prompt_comand('Digite o nome do produto que quer remover: ');
                yield (0, controleEstoque_1.removerProdutos)(name);
                break;
            case 4:
                yield (0, controleEstoque_1.valorTotal)();
                break;
            case 5:
                yield (0, controleEstoque_1.pesoTotal)();
                break;
            case 6:
                yield (0, controleEstoque_1.valorMedio)();
                break;
            case 7:
                yield (0, controleEstoque_1.pesoMedio)();
                break;
            case 0:
                break;
        }
        if (W == 0) {
            loop = 1;
        }
    }
});
main();
