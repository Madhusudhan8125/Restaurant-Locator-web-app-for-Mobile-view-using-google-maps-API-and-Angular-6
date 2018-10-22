import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap';



import { AppComponent } from './app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {GetRestaurantsInfoService} from './service/get-restaurants-info.service';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ResolverService} from './service/resolver.service';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailViewComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantListComponent,
    BodyComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GetRestaurantsInfoService, ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
