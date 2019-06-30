import { Component } from '@angular/core';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Productos Angular';
  public headColor:string;

  constructor(){
    this.headColor = GLOBAL.header_color;
  }
}
