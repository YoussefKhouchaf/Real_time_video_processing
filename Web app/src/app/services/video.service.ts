import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * Utilisé pour enregistrer les vidéos dans les différentes url dans le local Storage du navigateur
 */

export class VideoService {

  private TABvideo : any[] = [];

  private nbMaxVideo : number = 4;

  constructor() {
    let TABvideochaine : any = localStorage.getItem('TABvideo') ? localStorage.getItem('TABvideo') : "[]";
    this.TABvideo = JSON.parse(TABvideochaine);

    while(this.TABvideo.length < this.nbMaxVideo){
      this.ajoutVideo();
    }
  }

  public setTABVideo(TABvideo : any[]){
    this.TABvideo = TABvideo;
    let TABvideochaine = JSON.stringify(TABvideo)
    localStorage.setItem('TABvideo', TABvideochaine);
  }

  public getTABvideo(){
    return this.TABvideo;
  }

  public ajoutVideo(){
    if(this.TABvideo.length < this.nbMaxVideo) {
      let data: any = {
        dns: null,
        uri:null
      }
      this.TABvideo.push(data);
      this.setTABVideo(this.TABvideo);
    }
  }
}
