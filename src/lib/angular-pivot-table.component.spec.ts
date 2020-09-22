import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPivotTableComponent } from './angular-pivot-table.component';

describe('AngularPivotTableComponent', () => {
  let component: AngularPivotTableComponent;
  let fixture: ComponentFixture<AngularPivotTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPivotTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPivotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
