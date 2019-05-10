import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameViewComponent } from './game-view/game-view.component';
import { GameCartComponent } from './game-cart/game-cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FreeToPlayComponent } from './free-to-play/free-to-play.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'striked',
    component: GameViewComponent
  },
  {
    path: 'cart',
    component: GameCartComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'freeToPlay',
    component: FreeToPlayComponent
  }
  //,
  // {
  //   path : 'login',
  //   component: LoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
