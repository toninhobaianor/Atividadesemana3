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
            data.splice(data[0].valor,1);
        }
        await writeCSV(filePath,[data[0]])
    }
}
