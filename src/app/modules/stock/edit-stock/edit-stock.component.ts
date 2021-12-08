import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';
import { ShowStockComponent } from '../show-stock/show-stock.component';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {
  @Input() stocks!: Stock; //composant fils peut recevoir des informations depuis son composant parent
  @Output() notif = new EventEmitter<Stock>();
  @ViewChild(ShowStockComponent) c!: ShowStockComponent;

  constructor(private ac: ActivatedRoute,
    private service: StockService,
    private router: Router) { }

  stock = new Stock();
  id = this.ac.snapshot.params.id;
  ngOnInit(): void {
    this.getStock();
  }

  getStock() {
    this.service.fetchStocksById(this.id).subscribe(
      (res: Stock) => {
        this.stock = res;
        console.log(res.idStock);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  UpdateStock(data: Stock) {
    data.idStock = this.id;
    this.service.UpdatStock(data).subscribe(
      () => { },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigateByUrl('stock');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    throw new Error('Method not implemented for update.');
  }

}
