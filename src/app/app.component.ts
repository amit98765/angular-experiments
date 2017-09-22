import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name="A Big Name that could be seen";
  isZipCodeValid: boolean = true;

  changeName():void{
    this.name = "This is the changed name";
  }
}
