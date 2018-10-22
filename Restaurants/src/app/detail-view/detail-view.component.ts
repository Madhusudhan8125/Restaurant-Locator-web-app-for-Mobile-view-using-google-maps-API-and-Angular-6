import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';
import {GetRestaurantsInfoService} from '../service/get-restaurants-info.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit, AfterViewInit {
@ViewChild('gmap') gmapElement: any;
map: google.maps.Map;
mapProp;
restaurantInfo;



  constructor(public restaurant: GetRestaurantsInfoService) {
    this.restaurantInfo = restaurant.restaurantDetails;
  }

  ngOnInit() {
    this.mapProp = {
      center : new google.maps.LatLng(this.restaurantInfo.location.lat, this.restaurantInfo.location.lng),
      zoom : 18,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
    const location = new google.maps.LatLng(this.restaurantInfo.location.lat, this.restaurantInfo.location.lng);
    this.map.setCenter(location);
    const marker = new google.maps.Marker({
      position:  location,
      map: this.map,
      icon: '../assets/img/restaurantsMarker.ico',
      title: 'Got you!'
    });


  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.restaurant.getRestaurant.subscribe(restaurant => {
    //     this.restaurantInfo = restaurant;
    //     console.log('This is restaurant info in details componet', this.restaurantInfo);
    //
    //     // this.map.setCenter(new google.maps.LatLng(this.restaurantInfo.location.lat, this.restaurantInfo.location.lng));
    //     // const location = new google.maps.LatLng(this.restaurantInfo.location.lat, this.restaurantInfo.location.lng);
    //     // this.map.setCenter(location);
    //     // const marker = new google.maps.Marker({
    //     //   position: location,
    //     //   map: this.map,
    //     //   icon: '../assets/img/restaurantsMarker.ico',
    //     //   title: 'Got you!'
    //     // });
    //
    //   });
    // }, 0);
  }




  mapType(event) {
    this.map.setMapTypeId(event);
  }


  // setCenter = () => {
  //
  //   // call this function when the click happens on a particular div of restaurants in the list.
  //   // then route to detailve component and pass more restaurant info including longitude latitude.
  //   // event.preventDefault();
  //   const location = new google.maps.LatLng(this.restaurantInfo.location.lat, this.restaurantInfo.location.lng);
  //   this.map.setCenter(location);
  //   const marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map,
  //     icon: '../assets/img/restaurantsMarker.png',
  //     title: 'Got you!'
  //   });
  //
  //   console.log('This is marker stuff ', this.restaurantInfo);
  //
  // }
}
