import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  btnClicked:boolean = false;
  btnAnimate(){
    this.btnClicked = true;
    setTimeout(() => {
      this.btnClicked = false;
    }, 300);
  }
  nameValue: string = '';
  ageValue: string = '';
  emailValue: string = '';
  passwordValue: string = '';

}
