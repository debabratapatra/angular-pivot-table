
import { Configs } from '../models/Configs.model';

export class Store {
    processed_data: any[] = [];
    raw_data: any[];
    processed_headers: any[] = [];
    configs: Configs;

    getRawData() {
        return this.raw_data;
    }

    setRawData(raw_data) {
        this.raw_data = raw_data;
    }

    getProcessedData() {
        return this.processed_data;
    }

    setProcessedData(processed_data) {
        this.processed_data = processed_data;
    }

    getProcessedHeaders() {
        return this.processed_headers;
    }

    constructor() { }

    processData(source, configs: Configs) {
        this.setRawData(source);

        const rows = this.findUnique(this.pluck(source, configs.rows));
        const columns = this.findUnique(this.pluck(source, configs.columns));

        this.processed_headers = ['', ...columns];

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const processed_row = [row];
            for (let j = 0; j < columns.length; j++) {
                const column = columns[j];
                let count = 0;
                
                for (let k = 0; k < source.length; k++) {
                    const data = source[k];
                    
                    if(data[configs.rows] == row && data[configs.columns] == column) {
                        count++;
                    }
                }
                processed_row.push(count);
            }

            this.processed_data.push(processed_row);
        }
    }

    findUnique(a) {
        return a.filter(function(item, pos) {
            return a.indexOf(item) == pos;
        });
    }

    pluck(array, key) {
        return array.map(function(obj) {
          return obj[key];
        });
    }

}
