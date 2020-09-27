import { Component, Input, OnInit } from '@angular/core';
import { Configs } from './models/Configs.model';
import { Store } from './store/store';

@Component({
  selector: 'db-angular-pivot-table',
  templateUrl: './angular-pivot-table.component.html',
  styleUrls: ['./angular-pivot-table.component.scss']
})
export class AngularPivotTableComponent implements OnInit {
  @Input()
  source: any[] = [];

  @Input()
  configs: Configs;

  default_configs: Configs = {
    rows: '',
    columns: '',
    css: {
      row_selection_class: 'selected',
      header_class: '',
      table_class: ''
    },
    data_loading_text: 'Loading...',
    row_class_function: () => true,
    row_select_function: () => true
  };
  store = new Store();
  
  processed_data: any[] = [];
  processed_headers: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.validateConfigs();
    this.setDefaultConfigs();
  }

  ngOnChanges() {
    this.validateConfigs();
    this.setDefaultConfigs();
    this.store.processData(
      this.source,
      this.configs
    );
    this.processed_data = this.store.getProcessedData();
    this.processed_headers = this.store.getProcessedHeaders();
  }

  validateConfigs() {
    if (!this.source) {
      window.console.warn('source can\'t be empty!');
      return;
    }
    if (!this.configs) {
      window.console.warn('configs can\'t be empty!');
      return;
    }
  }

  setDefaultConfigs() {
    this.configs = Object.assign({}, this.default_configs, this.configs);

    // Deep clone.
    this.configs.css = Object.assign({}, this.default_configs.css, this.configs.css);
  }

}
