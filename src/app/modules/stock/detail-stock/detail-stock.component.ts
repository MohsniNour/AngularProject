import { Component, OnInit, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';
import { ShowStockComponent } from '../show-stock/show-stock.component';
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

  constructor() { }

  ngOnInit(): void {
  }

}
