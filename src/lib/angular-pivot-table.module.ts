import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularPivotTableComponent } from './angular-pivot-table.component';

@NgModule({
  declarations: [AngularPivotTableComponent],
  imports: [
    CommonModule
  ],
  exports: [AngularPivotTableComponent]
})
export class AngularPivotTableModule { }
