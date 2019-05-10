import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ShoppingCart {

  private createUrl = '/api/shopping-cart';
  private resourceUrl = '/api/shopping-cart/getall';
  private deleteUrl = '/api/shopping-cart';

  constructor(private http: HttpClient) { }


  create(data) {
    try {
      return this.http.post<any>(this.createUrl, data

      );
    } catch (error) {

    }

  }



  find(userName : string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${this.resourceUrl}/${userName}`, { observe: 'response' });
  }


  delete(deleteItem : string): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>(`${this.deleteUrl}/${deleteItem}`, { observe: 'response' });
  }



  // findAll(req?: any): Observable<Object> {
  //   return this.http.get<Object[]>(this.resourceUrl, { observe: 'response' });
  // }



}
