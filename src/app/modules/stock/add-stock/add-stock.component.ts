import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';
import { ShowStockComponent } from '../show-stock/show-stock.component';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  @Input() stocks!: Stock; //composant fils peut recevoir des informations depuis son composant parent
  @Output() notif = new EventEmitter<Stock>();
  //@ViewChild(GetStockComponent) c!: GetStockComponent;

  stock!: Stock[];
  stockForm = new FormGroup({
    qteStock: new FormControl(''),
    qteMin: new FormControl(''),
    libelleStock: new FormControl(''),
  });
  constructor(private service: StockService, private router: Router) { }


  ngOnInit(): void {
    this.service.fetchStocks().subscribe(
      (t) => {
        this.stock = t;
      },
      (error) => {
        console.log(error.status);
      }
    );
  }
  GetMaxId(t: Stock[]) {
    let Max = 0;
    let i = 0;
    let n = t.length;

    while (i < n) {
      if (t[i].idStock > Max) {
        Max = t[i].idStock;
      } else {
        i++;
      }
    }
    console.log('Max : ' + Max);
    return Max + Number(1);
  }

  SaveStock(data: Stock) {
    data.idStock = this.GetMaxId(this.stock);
    console.log(data.idStock);
    this.service.addStock(data).subscribe(
      () => {
        this.notif.emit(data)
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigateByUrl('stock');
  }

}
