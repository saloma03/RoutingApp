import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imageSrc: string = "";

  imgs:string[] = [
    './assets/portfolio/poert1.png',
    './assets/portfolio/port2.png',
    './assets/portfolio/port3.png',
    './assets/portfolio/poert1.png',
    './assets/portfolio/port2.png',
    './assets/portfolio/port3.png',
  ]
  imgClicked: boolean = false;


  getImgSrc(img:string) :void{
    this.imageSrc = img;
    console.log(this.imageSrc)
    this.imgClicked = true;
    console.log(this.imgClicked)
  }
  closeModal = (): void => {
    this.imgClicked = false;
    console.log("Modal closed");
  }


}
