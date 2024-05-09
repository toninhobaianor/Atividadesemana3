import fs from 'fs';
import csv from 'csv-parser';
import { Data } from "../Model/interfaceData";
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

export const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'title', title: 'TÍTULO' },
      { id: 'value', title: 'VALOR' },
    ],
  });

  return csvWriter.writeRecords(data);
};
