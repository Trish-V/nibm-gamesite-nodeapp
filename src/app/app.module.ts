import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerCardComponent } from './home/banner-card/banner-card.component';
import { NewsAreaComponent } from './home/news-area/news-area.component';
import { GameViewComponent } from './game-view/game-view.component';
import { ContentCardsComponent } from './home/content-cards/content-cards.component';
import { GameCartComponent } from './game-cart/game-cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GameHomeService } from './services/gamedetails.service';
import { LoginService } from './services/login.service';
import { ShoppingCart } from './services/shoppingcart.service';
import { CurrentUserService } from './services/currentUser.service';

import { CookieService } from 'ngx-cookie-service';
import { FreeToPlayComponent } from './free-to-play/free-to-play.component';
import { GamesComponent } from './free-to-play/games/games.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    BannerCardComponent,
    NewsAreaComponent,
    GameViewComponent,
    ContentCardsComponent,
    GameCartComponent,
    RegisterComponent,
    LoginComponent,
    FreeToPlayComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GameHomeService , LoginService, ShoppingCart , CurrentUserService , CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
