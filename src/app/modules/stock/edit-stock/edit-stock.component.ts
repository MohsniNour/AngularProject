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
  @Input() stocks!: Number;
  @Output() notif = new EventEmitter<Stock>();
  @ViewChild(ShowStockComponent) c!: ShowStockComponent;
  @Output() addEvent = new EventEmitter<Stock>();

  constructor(private ac: ActivatedRoute,
    private service: StockService,
    private router: Router) { }

  stock = new Stock();
  id: number = this.ac.snapshot.params.id;

  ngOnInit(): void {
    this.getStock();
  }

  getStock() {
    this.service.fetchStocksById(this.stocks).subscribe(
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
    data = this.stock;
    console.log(data.idStock);
    this.service.UpdateStock(data).subscribe(
      (next) => { this.reloadPage(); },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    throw new Error('Method not implemented for update.');
  }

  reloadPage() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
