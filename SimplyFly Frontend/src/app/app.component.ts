import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simply-fly';

  constructor(){}

  // @HostListener('window:popstate')
  // onPopState(){
  //   this.location.forward();

  // }
}
