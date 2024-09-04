import { Data } from "../Model/interfaceData";
import csv from 'csv-parser';
import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";

export const removeCSV = async(filePath: string, cond: string): Promise<void> => {
    const results: Data[] = [];
    fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data: Data) => {
        if(data.nome != cond){
            results.push(data)
        };
    })
    .on('end', async () =>{});

    fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log('path/file.txt was deleted');
    });

    const csvWriter = createObjectCsvWriter({
        path:filePath,
        header:[
            { id: "nome", title: "nome" },
            { id: "valor", title: "valor" },
            { id: "peso", title: "peso" },
            { id: "quantidade", title: "quantidade" },
        ],
        append: fs.existsSync(filePath),
    });

    await csvWriter.writeRecords(results);
    
}