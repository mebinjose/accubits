import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private router: Router) { }

  public emitEmail(email:string) : void {}
  
  public emitPassword(password:string) : void {}

  public login(data:boolean) : void {
    if(data){
      this.router.navigate(['./home']);
    }
  }

}
