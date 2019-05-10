import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ShoppingCart {

  private resourceUrl = '/api/shopping-cart';

  constructor(private http: HttpClient) { }


  create(data) {
    try {
      return this.http.post<any>(this.resourceUrl, data

      );
    } catch (error) {

    }

  }



  // find(id: string): Observable<Object> {
  //   return this.http.get<Object>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  // }



  // findAll(req?: any): Observable<Object> {
  //   return this.http.get<Object[]>(this.resourceUrl, { observe: 'response' });
  // }



}
