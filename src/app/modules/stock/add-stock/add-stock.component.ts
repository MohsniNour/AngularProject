import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
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
  @Input() stocks!: Stock;
  @Output() notif = new EventEmitter<Stock>();
  //@ViewChild(GetStockComponent) c!: GetStockComponent;

  stock!: Stock[];
  stockForm = new FormGroup({
    qteStock: new FormControl('', [Validators.required, Validators.min(100)]),
    qteMin: new FormControl('', [Validators.required, Validators.max(500)]),
    libelleStock: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*')]),
    urlImage: new FormControl('', Validators.required)
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
    data.urlImage = "assets/img/" + data.urlImage.substr(12, data.urlImage.length);
    console.log(data.urlImage);
    this.service.addStock(data).subscribe(
      () => {
        this.notif.emit(data),
          this.router.navigateByUrl('ShowActiveStocks')
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get libelleStock() { return this.stockForm.get('libelleStock'); }
  get qteStock() { return this.stockForm.get('qteStock'); }
  get qteMin() { return this.stockForm.get('qteMin'); }
  get urlImage() { return this.stockForm.get('urlImage'); }


}
