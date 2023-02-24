import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarServiceService {

  constructor(private snackBar: MatSnackBar) { }

  public openSnackBar(message: any = null, action:any = "Fermer", duration:any=5000) {
    this.snackBar.open(message, action, {duration:duration});
  }
}
