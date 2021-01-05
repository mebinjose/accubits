import { Component, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Output() public submit: EventEmitter<boolean> = new EventEmitter();

  login(){
    this.submit.emit(true);
  }

}
