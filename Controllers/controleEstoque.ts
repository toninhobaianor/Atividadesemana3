import { Data } from "../Model/interfaceData";
import  estoqueServise from '../service/serviceEstoque';

export async function adicionarProduto(data:Data){
    try{
        await estoqueServise.criar(data)
        console.log("Produto adicionado com sucesso");
    }
    catch (error){
        console.log("Erro ao adicionar produto", error);
    }
}

export async function listarProdutos(){
    const info = estoqueServise.listar();
    console.log(info);
}