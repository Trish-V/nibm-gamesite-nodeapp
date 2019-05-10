import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-to-play',
  templateUrl: './free-to-play.component.html',
  styleUrls: ['./free-to-play.component.scss']
})
export class FreeToPlayComponent implements OnInit {
  game1: boolean;
  game2: boolean;
  game3: boolean;


  constructor() { }

  ngOnInit() {
    // this.game2 = true;
    // this.game1 = true;
    // this.game3 = true;
  }

  gameDisplay(num) {
    if(num==1){
      this.game1=true;
      this.game2=false;
      this.game3 = false;
    } else if (num==2){
      this.game1=false;
      this.game2=true;
      this.game3 = false;
    } else if (num==3){
      this.game1=false;
      this.game2=false;
      this.game3 = true;
    }
  }

}
