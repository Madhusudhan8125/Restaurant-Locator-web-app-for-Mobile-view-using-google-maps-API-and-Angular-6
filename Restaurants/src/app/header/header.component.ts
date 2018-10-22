import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 showArrowLeft;

  constructor(public route: Router) {
    this.route.events.subscribe((event: Event) => {
        this.showArrowLeft  = (event.url != '/RestaurantListComponent') ? true : false;

    });
  }

  ngOnInit() {



  }

  showRestaurants() {
    this.route.navigate(['RestaurantListComponent']);
  }

}
