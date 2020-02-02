import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockChangeTableComponent } from './stock-change-table.component';

describe('StockChangeTableComponent', () => {
  let component: StockChangeTableComponent;
  let fixture: ComponentFixture<StockChangeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockChangeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockChangeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
