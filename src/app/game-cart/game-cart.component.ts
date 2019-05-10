import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../services/currentUser.service';
import { ShoppingCart } from '../services/shoppingcart.service';
import { CheckOutHistoryService } from '../services/checkouthistory.service';

@Component({
  selector: 'app-game-cart',
  templateUrl: './game-cart.component.html',
  styleUrls: ['./game-cart.component.scss']
})
export class GameCartComponent implements OnInit {

  userData: any
  shoppingCartList: any
  total = 0
  stopLoading = false
  constructor(
    private currentUser: CurrentUserService,
    private cart: ShoppingCart,
    private checkout: CheckOutHistoryService

  ) { }

  ngOnInit() {


    this.currentUser.get().subscribe(res => {
      this.userData = res
      this.getAll()

    })

  }


  getAll() {
    this.cart.find(this.userData.profile.login).subscribe(res => {
      console.log(JSON.stringify(res.body))
      this.shoppingCartList = res.body
      for (let item of res.body) {
        this.total += item.price
      }
      this.stopLoading = true
      // this.shoppingCartList.array.forEach(element => {

      // });

    })


  }

  deleteItem(item) {
    this.stopLoading = false
    this.cart.delete(item._id).subscribe(res => {
      this.getAll()
    })
  }

  checkoutNow() {
    for (let item of this.shoppingCartList) {
      item['userName'] = this.userData.profile.login
      this.checkout.createlogItem(item).subscribe(res => {

      })


    }

    this.shoppingCartList = []

    alert("Thank You For Purchasing !!! ")
  }

}

 
