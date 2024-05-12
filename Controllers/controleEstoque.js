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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Totalprodutos = exports.Totalitens = exports.pesoMedio = exports.valorMedio = exports.pesoTotal = exports.valorTotal = exports.removerProdutos = exports.listarProdutos = exports.adicionarProduto = void 0;
const serviceEstoque_1 = __importDefault(require("../service/serviceEstoque"));
function adicionarProduto(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield serviceEstoque_1.default.criar(data);
            console.log("Produto adicionado com sucesso.");
        }
        catch (error) {
            console.log("Erro ao adicionar produto", error);
        }
    });
}
exports.adicionarProduto = adicionarProduto;
function listarProdutos() {
    return __awaiter(this, void 0, void 0, function* () {
        yield serviceEstoque_1.default.listar();
    });
}
exports.listarProdutos = listarProdutos;
function removerProdutos(nome) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield serviceEstoque_1.default.remover(nome);
            console.log("Produto removido com sucesso.");
        }
        catch (error) {
            console.log("Erro ao remover produto", error);
        }
    });
}
exports.removerProdutos = removerProdutos;
function valorTotal() {
    return __awaiter(this, void 0, void 0, function* () {
        var total = yield serviceEstoque_1.default.calculaValor();
        console.log("O valor total dos produtos é:", total);
    });
}
exports.valorTotal = valorTotal;
function pesoTotal() {
    return __awaiter(this, void 0, void 0, function* () {
        var total = yield serviceEstoque_1.default.calculaPeso();
        console.log("O peso total dos produtos é:", total);
    });
}
exports.pesoTotal = pesoTotal;
function valorMedio() {
    return __awaiter(this, void 0, void 0, function* () {
        var total = yield serviceEstoque_1.default.calculaMediavalor();
        console.log("O valor da média de valores dos produtos é:", total);
    });
}
exports.valorMedio = valorMedio;
function pesoMedio() {
    return __awaiter(this, void 0, void 0, function* () {
        var total = yield serviceEstoque_1.default.calculaMediapeso();
        console.log("O valor da média de pesos dos produtos é:", total);
    });
}
exports.pesoMedio = pesoMedio;
function Totalitens() {
    return __awaiter(this, void 0, void 0, function* () {
        var total = yield serviceEstoque_1.default.quantidadeItens();
        console.log("A quantidade total de itens é:", total);
    });
}
exports.Totalitens = Totalitens;
function Totalprodutos() {
    return __awaiter(this, void 0, void 0, function* () {
        var total = yield serviceEstoque_1.default.quantidadeProdutos();
        console.log("A quantidade total de produtos é:", total);
    });
}
exports.Totalprodutos = Totalprodutos;
