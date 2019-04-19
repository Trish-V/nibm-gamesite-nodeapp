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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
