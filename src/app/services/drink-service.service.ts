import { Injectable } from '@angular/core';
import { Drink } from '../Drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkServiceService {
  _drinks: Promise<Drink>;
  drinkName: string;
  constructor() {

  }
   public getDrinks(): Promise<any> {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+this.drinkName;
       return new Promise((resolve,reject) => {
           let request = new XMLHttpRequest();
           request.open('GET',url);
           request.onload = function() {
              if (request.status == 200) {
                const obj = JSON.parse(request.response);
                 resolve(obj);
              } else {
                 reject("error in retrieving data from the server:"+request.statusText);
              }
           }
           request.onerror = function() {
               Error('there was a Network error');
           }
           request.send();
       });
     }

}


