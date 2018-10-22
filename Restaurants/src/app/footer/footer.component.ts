import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  opacityLunch = true;
  opacityInternets = true;

  constructor(public route: Router) {}

  ngOnInit() {
  }

  showRestaurants() {
    this.opacityLunch  = !this.opacityInternets;
    this.route.navigate(['RestaurantListComponent']);
  }

  showOther() {
    this.opacityInternets = !this.opacityLunch;
    // this.route.navigate(['RestaurantListComponent']);
  }

}
