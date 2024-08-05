import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() imgSrc: string = "";
  @Input() clicked: boolean = false;
  @Input() closeModalFunction!: () => void;

  closeModal(){
    this.closeModalFunction();
    console.log(this.clicked)
  }

}
