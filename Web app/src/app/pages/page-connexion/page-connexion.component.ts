import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {UntypedFormControl, Validators} from '@angular/forms';
import {UserNavigationService} from "../../services/user-navigation.service";
import {SnackbarServiceService} from "../../services/snackbar-service.service";

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.scss']
})

/**
 * TODO la connexion est simulée, il n'y a aucun appel API
 */

export class PageConnexionComponent {

  public connexion : any = {
      email : null,
      password : null
  }

  public hide : boolean = true;

  public emailFormControl = new UntypedFormControl('', [Validators.required, Validators.email]);

  constructor(public userNavigationService: UserNavigationService, private router: Router, private snackbarServiceService: SnackbarServiceService) {}

  public connexionModeAdmin(){
    this.userNavigationService.setIsAdmin();
    this.snackbarServiceService.openSnackBar('Vous êtes connecté')
    this.router.navigate(['/accueil'])
  }

  public deconnexionModeAdmin(){
    this.userNavigationService.resetIsAdmin();
    this.snackbarServiceService.openSnackBar('Vous êtes déconnecté')
    this.router.navigate(['/accueil'])
  }

  public valider(){
    return true;
  }
}
