import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserNavigationService {

  private debuURI : String = '';

  private isAdmin : boolean = false;

  private thinMenu : boolean = false;

  private nomUser : any = null;

  private modifierPage : boolean = false;

  constructor() { }

  public getThinMenu(){
    return this.thinMenu;
  }

  public setThinMenu(value : boolean){
    this.thinMenu = value;
  }

  public setIsAdmin(){
    this.isAdmin = true;
    if(!this.nomUser) this.nomUser = "Administrateur";
  }

  public resetIsAdmin(){
    this.isAdmin = false;
    if(this.nomUser == "Administrateur") this.nomUser = null;
  }

  public getIsAdmin(){
    return this.isAdmin;
  }
  public getNomUser(){
    return this.nomUser;
  }

  public getModifierPage(): boolean {
    return this.modifierPage && this.isAdmin;
  }

  public setModifierPage(value: boolean) {
    this.modifierPage = value;
  }
}
