import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  template: `
  <Div (click)="onDivClicked($event)">
     <button (click)="onSave($event)"> Button2 </button>
     <input (keyup.enter)="typed()"/>
  </Div>
  `,
  styleUrls: ['./web.component.css']
})
export class WebComponent   {
  typed(){
      console.log('Enter pressed');
  }
  onSave($event){
    $event.stopPropagation();
    console.log('from button component',$event);
  }   onDivClicked($event){
    console.log('from Div component',$event);
  } 
  constructor() { 
  }
}
