import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  constructor() { }

  @Output() public email: EventEmitter<string> = new EventEmitter();

}
