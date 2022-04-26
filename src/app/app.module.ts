import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPrintModule} from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponentComponent } from './offer-component/offer-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './template/home/home.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { RateCollaboratorComponent } from './rate-collaborator/rate-collaborator.component';
import { UserComponent } from './user/user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponentComponent,
    CreateOfferComponent,
    OfferListComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CollaboratorComponent,
    RateCollaboratorComponent,
    UserComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgxPrintModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
