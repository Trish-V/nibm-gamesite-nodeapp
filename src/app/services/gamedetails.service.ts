import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


type EntityArrayResponseType = HttpResponse<Object[]>;

@Injectable({
  providedIn: 'root'
})
export class GameHomeService {

  private resourceUrl = '/api/game-home-page';




  constructor(private http: HttpClient) { }


  create(data : Object):Observable<Object>{
    return this.http.post<Object>(this.resourceUrl , data , { observe : 'response' });
  }



  find(id: string): Observable<Object> {
    return this.http.get<Object>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }



  getAll(req?: any): Observable<EntityArrayResponseType> {
    return this.http.get<Object[]>(this.resourceUrl, { observe: 'response' });
  }





}
