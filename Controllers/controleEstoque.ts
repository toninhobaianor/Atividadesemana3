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