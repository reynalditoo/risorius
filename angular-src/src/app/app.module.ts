import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PhotosVideosComponent } from './photos-videos/photos-videos.component';
import { InfosPratiquesComponent } from './infos-pratiques/infos-pratiques.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AlertMsgComponent } from './admin/alert-msg/alert-msg.component';

import { DatabaseService } from './photos-videos/database.service';
import { CarouselService } from './photos-videos/carousel.service';
import { AuthService } from './auth/auth.service';
import { AdminService } from './admin/admin.service';
import { ContactService } from './contact/contact.service';

import { FocusDirective } from './shared/focus.directive';
import { TimeoutDirective } from './shared/timeout.directive';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    PhotosVideosComponent,
    InfosPratiquesComponent,
    ContactComponent,
    FocusDirective,
    SigninComponent,
    SignupComponent,
    AuthComponent,
    TimeoutDirective,
    AlertMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [DatabaseService, CarouselService, AuthService, AdminService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
