import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-stock-change-table',
  templateUrl: './stock-change-table.component.html',
  styleUrls: ['./stock-change-table.component.css']
})

export class StockChangeTableComponent implements OnChanges {
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();

  color: string;
  updatedstockvalue: number;
  // productToUpdate: any;
  stockValueChanged() {
    this.stockValueChange.emit({id: this.productId, updatedstockvalue: this.updatedstockvalue});
    this.updatedstockvalue = null;
  }

  constructor() { }

  ngOnChanges() {
    if (this.stock < 10) {
      this.color = 'red';
    } else {
      this.color = 'green';
    }
  }
//   changeStockValue(p) {
//     this.productToUpdate = this.products.find(this.findProducts, [p.id]);
//     this.productToUpdate.stock = this.productToUpdate.stock + p.updatedstockvalue;
//  }
//  findProducts(p) {
//    return p.id === this[0];
//  }

}
