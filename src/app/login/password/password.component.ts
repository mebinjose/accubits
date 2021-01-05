import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  @Output() public password: EventEmitter<string> = new EventEmitter();

}
