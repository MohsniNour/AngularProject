import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from 'src/app/Models/Stock';

@Injectable({
    providedIn: 'root',
})
export class StockService {
    baseurl = environment.url;
    constructor(private http: HttpClient) { }

    fetchStocks(): Observable<Stock[]> {
        return this.http.get<Stock[]>(this.baseurl + 'retrieveActiveStocks');
    }

    fetchPassiveStocks(): Observable<Stock[]> {
        return this.http.get<Stock[]>(this.baseurl + 'retrievePassiveStocks');
    }

    fetchStocksById(id: any): Observable<Stock> {
        return this.http.get<Stock>(this.baseurl + 'Stock/' + id);
    }

    addStock(data: Stock) {
        return this.http.post(this.baseurl + 'addStock', data);
    }

    deleteStock(id: any) {
        console.log(id);
        return this.http.delete(this.baseurl + 'Stock/' + id);
    }

    RemoveStock(data: Stock): Observable<Stock> {
        return this.http.put<Stock>(
            this.baseurl + 'RemoveStock/' + data.idStock,
            data
        );
    }

    UpdatStock(data: Stock): Observable<Stock> {
        return this.http.put<Stock>(
            this.baseurl + 'Stock/' + data.idStock,
            data
        );
    }
}