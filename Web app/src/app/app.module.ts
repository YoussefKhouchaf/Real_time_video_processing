import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {RouterModule} from "@angular/router";
import {MatChipsModule} from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { WebcamModule } from 'ngx-webcam';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageAccueilVideoComponent } from './pages/page-accueil-video/page-accueil-video.component';
import {ModalVideFullScreen} from "./modals/modal-video-full-screen/modal-video-full-screen.component";
import { CameraMobileComponent } from './components/camera-mobile/camera-mobile.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { ModalParametresVideoComponent } from './modals/modal-parametres-video/modal-parametres-video.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageAccueilVideoComponent,
    ModalVideFullScreen,
    CameraMobileComponent,
    MenuComponent,
    PageConnexionComponent,
    ModalParametresVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSidenavModule,
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    WebcamModule,
    MatTooltipModule,
    MatInputModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
