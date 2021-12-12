import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StockRoutingModule } from './stock-routing.module';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { DeleteStockComponent } from './delete-stock/delete-stock.component';
import { ShowStockComponent } from './show-stock/show-stock.component';
import { DetailStockComponent } from './detail-stock/detail-stock.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AddStockComponent,
    EditStockComponent,
    DeleteStockComponent,
    ShowStockComponent,
    DetailStockComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ]
})
export class StockModule { }
