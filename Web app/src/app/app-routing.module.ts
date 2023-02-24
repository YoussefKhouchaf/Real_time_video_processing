import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAccueilVideoComponent} from "./pages/page-accueil-video/page-accueil-video.component";
import {PageConnexionComponent} from "./pages/page-connexion/page-connexion.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: PageAccueilVideoComponent},
  {path: 'connexion', component: PageConnexionComponent},
  {path: '**', redirectTo: 'video'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
