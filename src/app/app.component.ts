import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name="A Big Name that could be seen";
  isZipCodeValid: boolean = true;
  shippingAddress: string;

  changeName():void{
    this.name = "This is the changed name";
  }
  setDefaultSA():void{
    this.shippingAddress = "123 ABC Road";
  }
}
