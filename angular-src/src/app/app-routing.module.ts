import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { PhotosVideosComponent } from './photos-videos/photos-videos.component';
import { InfosPratiquesComponent } from './infos-pratiques/infos-pratiques.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { AlertMsgComponent } from './admin/alert-msg/alert-msg.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
	{ path: '', component: AccueilComponent },
	{ path: 'accueil', component: AccueilComponent },
	{ path: 'photos-videos', component: PhotosVideosComponent },
	{ path: 'infos-pratiques', component: InfosPratiquesComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'authentification', component: AuthComponent },
	{ path: 'alert-msg', component: AlertMsgComponent, canActivate:[AuthGuard] } // canActivate: pour que qqun qui n'est pas connecté en admin ne puisse accéder à cette route (directement via l'url)
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}