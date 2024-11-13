import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id:number;
  @Input() title : string;
  @Input() image: string;
  @Input() description : string;
  @Input() available: boolean;
  @Input() btnText:string;

  @Output() notified = new EventEmitter<any>();
  notif(){
    this.notified.emit({'code':202, 'id': this.id});
  }
  nom: string
  clickImage(description:string){
  alert(description)
  }
  
}
