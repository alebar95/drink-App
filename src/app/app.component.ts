import { DrinkServiceService } from './services/drink-service.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drinkapp';
  drinks: Array<any>;
  drinkName: string;
  constructor(private service: DrinkServiceService) {
  }
  onClickSearch() {
      this.service.drinkName = this.drinkName;
      this.service.getDrinks().then (res => {
            this.drinks = res.drinks;
      })
  }
}
