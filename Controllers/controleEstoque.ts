import { Data } from "../Model/interfaceData";
import  estoqueServise from '../service/serviceEstoque';

export async function adicionarProduto(data:Data){
    try{
        await estoqueServise.criar(data)
        console.log("Produto adicionado com sucesso.");
    }
    catch (error){
        console.log("Erro ao adicionar produto", error);
    }
}

export async function listarProdutos(){
    await estoqueServise.listar();
}

export async function removerProdutos(nome:string) {
    try{
        await estoqueServise.remover(nome)
        console.log("Produto removido com sucesso.");
    }
    catch (error){
        console.log("Erro ao remover produto", error);
    } 
}

export async function valorTotal() {
    var total = await estoqueServise.calculaValor();
    console.log("O valor total dos produtos é:",total);
}

export async function pesoTotal() {
    var total = await estoqueServise.calculaPeso();
    console.log("O peso total dos produtos é:",total);
}

export async function valorMedio() {
    var total = await estoqueServise.calculaMediavalor();
    console.log("O valor da média de valores dos produtos é:",total);
}

export async function pesoMedio() {
    var total = await estoqueServise.calculaMediapeso();
    console.log("O valor da média de pesos dos produtos é:",total);
}

export async function Totalitens() {
    var total = await estoqueServise.quantidadeItens();
    console.log("A quantidade total de itens é:",total);
}

export async function Totalprodutos() {
    var total = await estoqueServise.quantidadeProdutos();
    console.log("A quantidade total de produtos é:",total);
}