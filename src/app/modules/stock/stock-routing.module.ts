import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ShowStockComponent } from './show-stock/show-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { DeleteStockComponent } from './delete-stock/delete-stock.component';
import { DetailStockComponent } from './detail-stock/detail-stock.component';
import { StarComponentComponent } from './ngbd-rating-template/star-component.component';

const routes: Routes = [
  { path: 'ShowActiveStocks', component: ShowStockComponent },
  { path: 'ShowPassiveStocks', component: ShowStockComponent },
  { path: 'AddStock', component: AddStockComponent },
  { path: 'EditStock', component: EditStockComponent },
  { path: 'DeleteStock', component: DeleteStockComponent },
  { path: 'DetailStock', component: DetailStockComponent },
  { path: 'StarStock', component: StarComponentComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
