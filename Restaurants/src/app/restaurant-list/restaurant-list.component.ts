import { Component, OnInit } from '@angular/core';
import {GetRestaurantsInfoService} from '../service/get-restaurants-info.service';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  url = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
  restaurants;

  constructor(public http: HttpClient , public restaurantList: GetRestaurantsInfoService, public route: Router) {

    // this.http.get(this.url)
    //   .pipe(
    //     map(res => res)
    //   )
    //   .subscribe(res => {
    //       this.restaurants = res;
    //       console.log('data', this.restaurants);
    //     }
    //   );
     this.restaurants = this.restaurantList.restaurantsInfo;
  }

  ngOnInit() {

    console.log('This is get restaurants info', this.restaurants);


  }

  restaurantDetails(event) {
    this.restaurantList.setRestaurant(event);
    this.route.navigate(['DetailViewComponent']);
  }

}
