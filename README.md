# Angular Pivot Table
Angular Pivot Table is a simple pivot table built in Angular. If data needs to be grouped by fields then check out this <a href="https://github.com/debabratapatra/ngtreegrid" target="_blank">ngtreegrid</a> Package. If header needs to be fixed/freezed and body needs to be scrollable then check out this <a href="https://curiouslinks.com/pages/angular-fix-header-grid/demo" target="_blank">Fix Header Grid</a> Package.

## Demo

Click <a href="https://curiouslinks.com/pages/angular-pivot-table/demo" target="_blank">here</a> for demo. This readme is the documentation. Visit my <a href="https://curiouslinks.com" target="_blank">Website</a> to know other packages. 
<div>
<img src="https://curiouslinks.com/resources/images/cards/angular-pivot-table.png" alt="Loading" />
</div>

## Donate :hearts:

Please consider a <a href="https://curiouslinks.com/donate.html" target="_blank">donation</a> if it is useful to you.

## Version
Choose the correct version for your application.

| Angular  |angular-pivot-table |
|---|---|
| <= 8  | 1.0.0  |
| >= 9  | 1.0.3  |

## Installation

```bash
    npm i angular-pivot-table
```

## Usage

### Import
Import AngularPivotTableModule Module in your application module.

```javascript
  import {AngularPivotTableModule} from 'angular-pivot-table';
```

Add it to your imports array.

```javascript
    @NgModule({
      imports: [
        AngularPivotTableModule
      ]
    })
```

### Data
Data should look like below. 

```
  source= [
    {'author': 'Deba', 'book': 'Angular'},
    {'author': 'Deba', 'book': 'Physics'},
    {'author': 'Aditya', 'book': 'Angular'}
  ];
```

### Configs
Below are configs that can be set

#### Table Configurations
| Field  |Type   |Default |  Description |
|---|---|---|---|
|  rows |  string | n/a  |  Mandatory field. It is name of the column that will be treated as rows |
|  columns |  string | n/a  |  Mandatory field. It is name of the column that will be treated as columns |
|  data_loading_text |  string | 'Loading...'  |  Loading place holder. This will be displayed when data is empty. |
|  row_class_function |  Function | n/a  |  Callback function for row class. A custom class can be returned which will be added to the row. |
| css  | Object  |  n/a | Css class for icons. See Below  |

##### css
| Field  |Type   |Default |  Description |
|---|---|---|---|
| row_selection_class  | string  |  n/a | CSS Class for selected row.  |
| header_class  | string  |  n/a | CSS Class for header.  |
| table_class  | string  |  n/a | CSS Class for Table.  |

#### Example
```
  configs: any = {
    'rows': 'author',
    'columns': 'book'
  };
```

### HTML
Add below node to your html.
```
  <db-angular-pivot-table [source]="source" [configs]='configs'></db-angular-pivot-table>
```

### Can I hire you guys?
Yes. Please contact us at <a href="mailto:debabratapatra12@gmail.com">debabratapatra12@gmail.com</a> for any professional support. We will be happy to work with you!

## License
This project is licensed under the MIT license.
