import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from 'src/app/Models/Stock';

@Injectable({
    providedIn: 'root',
})
export class StockService {
    baseurl = environment.production;
    constructor(private http: HttpClient) { }

    fetchStocks(): Observable<Stock[]> {
        return this.http.get<Stock[]>("http://localhost:8098/SpringMVC/servlet/retrieveActiveStocks");
    }

    fetchPassiveStocks(): Observable<Stock[]> {
        return this.http.get<Stock[]>("http://localhost:8098/SpringMVC/servlet/retrievePassiveStocks");
    }

    fetchStocksById(id: any): Observable<Stock> {
        return this.http.get<Stock>(this.baseurl + 'Stock/' + id);
    }

    addStock(data: Stock) {
        return this.http.post(this.baseurl + 'Stock', data);
    }

    deleteStock(id: any) {
        console.log(id);
        return this.http.delete(this.baseurl + 'Stock/' + id);
    }
    UpdatStock(data: Stock): Observable<Stock> {
        return this.http.put<Stock>(
            this.baseurl + 'Stock/' + data.idStock,
            data
        );
    }
}