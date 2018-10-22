import { Injectable } from '@angular/core';
import {GetRestaurantsInfoService} from './get-restaurants-info.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Route, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ResolverService implements Resolve<{}> {
  getRestaurantsInfo;

  constructor(public getRestaurants: GetRestaurantsInfoService, public route: ActivatedRoute) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{}> | Promise<{}> | {} {
    this.getRestaurantsInfo = this.getRestaurants.GetRestaurantsInfo();
    return this.getRestaurantsInfo;
  }

}
