import { CssClass } from './CssClass.model';

export interface Configs {
    css: CssClass;
    data_loading_text: string;
    height?: string;
    row_class_function: Function;
    row_select_function: Function;
    rows: string;
    columns: string;
}
