import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: string;
  credentials: any;
  loginToken: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });


    this.loginForm.valueChanges.subscribe(
      res => {
        this.credentials = res;


        console.log(JSON.stringify(res));
      }
    )
  }

  login() {

        // alert(JSON.stringify(this.credentials));
        this.loginService.login(this.credentials).subscribe(
          res => {
            this.loginToken = res.body;
            console.log(this.loginToken);
            localStorage.setItem('token', JSON.stringify( this.loginToken));

            if(this.loginToken.sessionToken){
              this.router.navigate(['/home'])
            }

          });

  }
}
