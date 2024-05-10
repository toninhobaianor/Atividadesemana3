import { Data } from "../Model/interfaceData";
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'nome' },
      { id: 'valor', title: 'valor' },
      { id: 'peso', title: 'peso' },
      { id: 'quantidade', title: 'quantidade' }
    ],
  });

  return csvWriter.writeRecords(data);
};

export default writeCSV
