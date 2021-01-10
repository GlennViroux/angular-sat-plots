import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

export interface CardData {
  imageId:string;
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-about-desktop',
  templateUrl: './about-desktop.component.html',
  styleUrls: ['./about-desktop.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class AboutDesktopComponent implements OnInit,AfterContentInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    console.log("On Init")    
  }

  ngAfterContentInit(){
    console.log("After content init")
  }

  ngAfterViewInit(){
    console.log("After view init")
  }



  updateHeight(){
    let personalImage:HTMLElement|null = document.getElementById("personal-image");
    let imageCard:HTMLElement|null = document.getElementById("image-card");
    let newHeight:number|undefined = personalImage?.clientHeight;
    if (newHeight && imageCard){
      imageCard.style.height = newHeight+"px";
    }
  }

  data: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };

  cardClicked() {
    this.updateHeight();
    console.log("card clicked!");
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }

}
