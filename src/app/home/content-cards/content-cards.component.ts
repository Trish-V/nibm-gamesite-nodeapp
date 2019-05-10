import { Component, OnInit } from '@angular/core';
import { GameHomeService } from 'src/app/services/gamedetails.service';
import { ShoppingCart } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.scss']
})
export class ContentCardsComponent implements OnInit {
  userCredentials: any;
  gameDetailsList = [];

  constructor(private gameHomeService: GameHomeService, private shoppingCart: ShoppingCart) { this.getAllGames(); }



  ngOnInit() {

  }



  getAllGames() {

    this.gameHomeService.getAll().subscribe(res => {

      this.gameDetailsList = res.body;
      //  console.log(JSON.stringify(res.body))
      // alert(JSON.stringify(res.body));
    },

      err => {
        // alert('Cannot get details' + err.body);
      }


    );

  }


  addToWishList(game) {

    // this.userCredentials = JSON.parse(localStorage.getItem('token').toString());

    game['userName'] = "fernandoviroj@gmail.com"

    // console.log(JSON.stringify(game));

    this.shoppingCart.create(   (game) ).subscribe(res => {

    })
  }





}
