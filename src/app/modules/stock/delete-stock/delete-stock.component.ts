import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';
import { ShowStockComponent } from '../show-stock/show-stock.component';

@Component({
  selector: 'app-delete-stock',
  templateUrl: './delete-stock.component.html',
  styleUrls: ['./delete-stock.component.css']
})
export class DeleteStockComponent implements OnChanges {
  @Input() stocks!: Stock; //composant fils peut recevoir des informations depuis son composant parent
  @Output() notif = new EventEmitter<Stock>();
  @ViewChild(ShowStockComponent) c!: ShowStockComponent;
  constructor(private service: StockService) { }


  //ngOnInit(): void {}
  Delete(id: number) {
    console.log('id : ' + id);
    this.service.deleteStock(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    throw new Error('Method not implemented for delete.');
  }

}
