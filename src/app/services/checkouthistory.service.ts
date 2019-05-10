import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CheckOutHistoryService{

  private resourceUrl = '/api/checkout-history';

  constructor(private http: HttpClient) { }


  createlogItem(data : Object):Observable<Object>{
    return this.http.post<Object>(this.resourceUrl , data , { observe : 'response' });
  }



  // find(id: string): Observable<Object> {
  //   return this.http.get<Object>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  // }



  // findAll(req?: any): Observable<Object> {
  //   return this.http.get<Object[]>(this.resourceUrl, { observe: 'response' });
  // }





}
