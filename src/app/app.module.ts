import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './template/pages/header/header.component';
import { FooterComponent } from './template/pages/footer/footer.component';
import { SideBarComponent } from './template/pages/side-bar/side-bar.component';
import { PageContentComponent } from './template/pages/page-content/page-content.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockModule } from './modules/stock/stock.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    PageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StockModule,
    //MatDialogModule,
    //NgbModule,
    //MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
