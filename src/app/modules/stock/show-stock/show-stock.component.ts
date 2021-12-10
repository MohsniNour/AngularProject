import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
  test!: Stock;


  ngOnInit(): void {
    this.GetAllStock();
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

  Delete(id: number) {
    this.service.deleteStock(id).subscribe(
      () => { },
      (error) => {
        console.log(error);
      }
    );
    console.log('----------------------------');
    this.ListStock.splice(this.ListStock.length)
    this.GetAllStock();
  }

  UpdateStock(id: number) {
    //this.router.navigate(['stock/updateStock', id]);
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
