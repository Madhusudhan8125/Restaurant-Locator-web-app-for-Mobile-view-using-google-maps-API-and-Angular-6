import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {DetailViewComponent} from './detail-view/detail-view.component';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {ResolverService} from './service/resolver.service';
import {BodyComponent} from './body/body.component';


const appRoutes: Routes = [
  {
    path: '',
    component: BodyComponent, resolve: {getRestaurantsInfo: ResolverService},
    children: [
      {path: '', component: RestaurantListComponent , pathMatch: 'full'},
      {path: 'DetailViewComponent', component: DetailViewComponent},
      {path: 'RestaurantListComponent', component: RestaurantListComponent},
    ],

  },
  { path: 'AppComponent', component: AppComponent },
  { path: '**', redirectTo: 'AppComponent' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
