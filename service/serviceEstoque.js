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
const readCSV_1 = __importDefault(require("../Model/readCSV"));
const writeCSV_1 = __importDefault(require("../Model/writeCSV"));
const filePath = './Model/estoque.csv';
exports.default = new class estoqueServise {
    criar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (typeof data.nome !== 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade)) {
                    throw new Error('Dados Invalidos para o produto');
                }
                else {
                    yield (0, writeCSV_1.default)(filePath, [data]);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, readCSV_1.default)(filePath);
            return data;
        });
    }
};
