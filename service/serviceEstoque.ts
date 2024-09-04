import  readCSV  from "../Model/readCSV";
import  writeCSV from "../Model/writeCSV";
import { Data } from "../Model/interfaceData";
import { removeCSV } from "../Model/RemoveCSV";
import fs from 'fs';

const filePath = './Model/estoque.csv'

export default new class estoqueServise{
    async criar(data: Data){
        try{
            if(typeof data.nome !== 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade)){
                throw new Error('Dados Invalidos para o produto');
            }
            else{
                await writeCSV(filePath,[data]);
            }
        }
        catch(error){
            console.log(error);
        }
    }

    async listar(){
        const data = await readCSV(filePath);
        console.log('Dados lidos',data);
    }

    async remover(nome: string){
        const data = await removeCSV(filePath, nome);
        console.log(data);  
    }
    // não esta funcionando

    async calculaValor(){
        //const data = await readCSV(filePath);
        //return data.reduce((acc,data) => acc + data.valor, 0);
        const data = await readCSV(filePath);
        var valortot: number = 0;
        var aux;
        for(var i = 0;i < data.length;i++){
            aux = Number(data[i].valor);
            valortot = valortot + aux;
        }
        return valortot;
    }

    async calculaPeso(){
        const data = await readCSV(filePath);
        var pesotot: number = 0;
        for(var i = 0;i <data.length;i++){
            pesotot += Number(data[i].peso);
        }
        return pesotot;
    }

    async calculaMediavalor(){
        const data = await readCSV(filePath);
        var valortot: number = 0;
        for(var i = 0;i <data.length;i++){
            valortot += Number(data[i].valor);
        }
        return valortot/data.length;
    }

    async calculaMediapeso(){
        const data = await readCSV(filePath);
        var pesotot: number = 0;
        for(var i = 0;i <data.length;i++){
            pesotot += Number(data[i].peso);
        }
        return pesotot/data.length;
    }

    async quantidadeItens(){
        const data = await readCSV(filePath);
        var itens: number = 0;
        for(var i = 0;i <data.length;i++){
            itens += Number(data[i].quantidade);
        }
        return itens;
    }

    async quantidadeProdutos(){
        const data = await readCSV(filePath);
        return data.length;
    }

}
