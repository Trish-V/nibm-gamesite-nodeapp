import { Component, OnInit, Input } from '@angular/core';
import { CurrentUserService } from './services/currentUser.service';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public userSessionExist = false

  constructor(
    private currentUser: CurrentUserService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {


    this.currentUser.get().subscribe(res => {

      this.userSessionExist = true

      console.log("User info : " + JSON.stringify(res))


      let allCookies: {} = this.cookieService.getAll();
      console.log(allCookies)
      // if (allCookies.length < 15) {

      // }
      // this.router.navigate(['/login']);
    }, err => {
      if (err.status == 500) {
        this.userSessionExist = false
      }
      // console.log("error : ˚˚˚˚˚˚   " + JSON.stringify(err))
    })


    console.log(JSON.stringify(this.get_cookies_array()))

  }



  title = 'StrikeEnginePlus';
  get_cookies_array() {

    var cookies = {};

    if (document.cookie && document.cookie != '') {
      var split = document.cookie.split(';');
      for (var i = 0; i < split.length; i++) {
        var name_value = split[i].split("=");
        name_value[0] = name_value[0].replace(/^ /, '');
        cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
      }
    }

    return cookies;

  }

}
