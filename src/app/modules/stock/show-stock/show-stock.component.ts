import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';
import { AddStockComponent } from '../add-stock/add-stock.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrls: ['./show-stock.component.css']
})
export class ShowStockComponent implements OnInit, AfterViewInit {
  @Input() search!: String;
  @Input() idStock!: Number;
  @Input() idStockActivate!: Number;
  @ViewChild(AddStockComponent) c!: AddStockComponent;

  p: number = 1;

  constructor(private service: StockService, private router: Router, private dialog: MatDialog,
    private modalService: NgbModal) {

  }

  ngAfterViewInit(): void {
    this.c.GetMaxId;
    throw new Error('Method not implemented viewChild.');
  }
  ListStock!: Stock[];
  ListStockPassive!: Stock[];
  SearchListStock: any;
  test!: Stock;
  Rate1 = new Array(1);
  Rate2 = new Array(2);
  Rate3 = new Array(3);
  Rate4 = new Array(4);
  Rate5 = new Array(5);


  ngOnInit(): void {
    this.GetAllStock();
    this.ActivateStock();

  }
  ActivateStock() {
    this.service.fetchStocks().subscribe(
      (t) => {
        console.log('test');
        console.log(t);

        this.ListStock = t;
      },
      (error) => {
        console.log(error);
        console.log("test");
      }
    );
  }

  OrderStocksByQte() {
    this.service.orderStocksByQte().subscribe(
      (t) => {
        console.log('test');
        console.log(t);

        this.ListStock = t;
      },
      (error) => {
        console.log(error);
        console.log("test");
      }
    );

  }

  DeletedStock() {
    this.service.fetchPassiveStocks().subscribe(
      (t) => {
        console.log(t);

        this.ListStockPassive = t;
      },
      (error) => {
        console.log(error);
        console.log("test");
      }
    );
  }
  GetAllStock() {
    console.log('getActiveStocks');

  }

  GetPassiveStock() {
    console.log('getPassiveStocks');

  }

  GetListSearch() {
    if (this.search === "") {
      this.service.fetchStocks().subscribe(
        (t) => {
          console.log('test');
          console.log(t);

          this.ListStock = t;
        },
        (error) => {
          console.log(error);
          console.log("test");
        }
      );
    }
    else {
      this.service.searchStocks(this.search).subscribe(
        (t) => {
          console.log('test');
          console.log(this.search);
          console.log(t);

          this.SearchListStock = t;
          this.ListStock = t;
        },
        (error) => {
          console.log(error);
          console.log("test");
        }
      );
    }
  }

  stockActivate = new Stock();
  Activate(id: number) {
    this.service.fetchStocksById(id).subscribe(
      (t) => {
        console.log(t);
        this.stockActivate = t;
        console.log('le stock est :');
        console.log(this.stockActivate);
        this.service.ActivateStock(this.stockActivate).subscribe(
          () => {
            console.log('test');
            console.log(id);
            console.log(this.stock);
            this.DeletedStock();
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );

  }

  stock = new Stock();
  Delete(id: number) {
    this.service.fetchStocksById(id).subscribe(
      (t) => {
        console.log(t);
        this.stock = t;
        console.log('le stock est :');
        console.log(this.stock);
        this.service.RemoveStock(this.stock).subscribe(
          () => {
            console.log('test');
            console.log(id);
            console.log(this.stock);
            this.ActivateStock();
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  UpdateStock(id: number) {
    this.router.navigate(['updateStock/', id]);
  }

  addStock() {
    this.router.navigate(['stock/addStock']);
  }

  addRequest(t: Stock) {
    console.log(t);
    console.log("++++++++++++++++++++++");
  }

  onCreate() {

    this.dialog.open(ShowStockComponent);
  }
  closeResult = '';

  open(content: any) {
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openupdate(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
