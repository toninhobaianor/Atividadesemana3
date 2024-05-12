import  readCSV  from "../Model/readCSV";
import  writeCSV from "../Model/writeCSV";
import { Data } from "../Model/interfaceData";
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
        const data = await readCSV(filePath);
        if(data[0].nome == nome){
            const novodata = data.splice(data[0].valor,1);
            await writeCSV(filePath,[novodata[0]]);
        }else{
            await writeCSV(filePath,[data[0]]);
        }   
    }
    // não esta funcionando

    async calculaValor(){
        const data = await readCSV(filePath);
        var valortot: number = 0;
        for(var i = 0;i <data.length;i++){
            valortot += data[i].valor;
        }
        return valortot;
    }

    async calculaPeso(){
        const data = await readCSV(filePath);
        var pesotot: number = 0;
        for(var i = 0;i <data.length;i++){
            pesotot += data[i].peso;
        }
        return pesotot;
    }

    async calculaMediavalor(){
        const data = await readCSV(filePath);
        var valortot: number = 0;
        for(var i = 0;i <data.length;i++){
            valortot += data[i].valor;
        }
        return valortot/data.length;
    }

    async calculaMediapeso(){
        const data = await readCSV(filePath);
        var pesotot: number = 0;
        for(var i = 0;i <data.length;i++){
            pesotot += data[i].peso;
        }
        return pesotot/data.length;
    }


}
