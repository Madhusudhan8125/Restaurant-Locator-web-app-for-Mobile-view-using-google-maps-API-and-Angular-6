import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class GetRestaurantsInfoService {

  public restaurant = new Subject<any>();
  getRestaurant = this.restaurant.asObservable();


  url = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
  // url = '../Json Data/restaurantsInfo.json';
  restaurantsInfo;
  a;
  restaurantDetails;
  constructor(private http: HttpClient) {

    this.http.get(this.url)
    .pipe(
      map(res => res)
    )
    .subscribe(res => {
      this.restaurantsInfo = res;
      console.log('data', this.restaurantsInfo);
    }
    );


  }

  GetRestaurantsInfo() {
    return this.http.get(this.url).map(response => {
      this.a = response;
      console.log('Response', this.a);
    });
  }

  setRestaurant(restaurant: any) {
    this.restaurantDetails = restaurant;
    this.restaurant.next(restaurant);
    console.log('THis is restaurant info', restaurant);
  }

}
