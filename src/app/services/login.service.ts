import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private resourceUrl = 'https://dev-364135.okta.com/api/v1/authn';

  constructor(private http: HttpClient) { }


// tslint:disable-next-line: ban-types
 login(data : any):Observable<any>{

// tslint:disable-next-line: ban-types
    return this.http.post<any>(this.resourceUrl , data , { observe : 'response' });
  }




}
