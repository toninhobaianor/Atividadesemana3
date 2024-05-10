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
exports.removerProduto = exports.adicionarProduto = void 0;
const serviceEstoque_1 = __importDefault(require("../service/serviceEstoque"));
function adicionarProduto(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield serviceEstoque_1.default.criar(data);
            console.log("Produto adicionado com sucesso");
        }
        catch (error) {
            console.log("Erro ao adicionar produto", error);
        }
    });
}
exports.adicionarProduto = adicionarProduto;
function removerProduto(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield serviceEstoque_1.default.criar(data);
            console.log("Produto adicionado com sucesso");
        }
        catch (error) {
            console.log("Erro ao adicionar produto", error);
        }
    });
}
exports.removerProduto = removerProduto;