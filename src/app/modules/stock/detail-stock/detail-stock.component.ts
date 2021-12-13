import { Component, OnInit, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';
import { ProduitService } from 'src/app/service/produit/produit.service';
import { ShowStockComponent } from '../show-stock/show-stock.component';
import { Produit } from 'src/app/Models/Produit';
@Component({
  selector: 'app-detail-stock',
  templateUrl: './detail-stock.component.html',
  styleUrls: ['./detail-stock.component.css']
})
export class DetailStockComponent implements OnInit {
  @Input() stocks!: Number;
  @Output() notif = new EventEmitter<Stock>();
  @ViewChild(ShowStockComponent) c!: ShowStockComponent;
  @Output() addEvent = new EventEmitter<Stock>();

  constructor(private ac: ActivatedRoute,
    private service: StockService,
    private router: Router, private serviceProduit: ProduitService) { }

  stock = new Stock();
  produit = new Produit();
  ListProduit!: Produit[];
  prts: any;

  ngOnInit(): void {
    this.getStock();
  }

  getStock() {
    this.service.fetchStocksById(this.stocks).subscribe(
      (res: Stock) => {
        this.stock = res;
        this.stock.produits = this.getProduits();
        console.log(res.idStock);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getProduits(): Produit[] {
    this.serviceProduit.fetchStocksById(this.stock.idStock).subscribe(
      (t) => {
        this.prts = t;
        console.log(this.prts);
      },
      (error) => {
        console.log(error);
      }
    );
    return this.stock.produits = this.ListProduit;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    throw new Error('Method not implemented for update.');
  }


}
