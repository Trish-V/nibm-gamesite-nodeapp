import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CurrentUserService {

    private resourceUrl = '/user';

    constructor(private http: HttpClient) { }


    get(): Observable<HttpResponse<any>> {
        return this.http.get<HttpResponse<any>>(this.resourceUrl);
    }



    // find(id: string): Observable<Object> {
    //   return this.http.get<Object>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    // }



    // findAll(req?: any): Observable<Object> {
    //   return this.http.get<Object[]>(this.resourceUrl, { observe: 'response' });
    // }





}
