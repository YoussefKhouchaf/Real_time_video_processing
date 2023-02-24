import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {UserConnexionService} from "../../../connexion/services/user-connexion.service";
import {ModalVideFullScreen} from "../../modals/modal-video-full-screen/modal-video-full-screen.component";
import {MatDialog} from "@angular/material/dialog";
import {VideoService} from "../../../service/video.service";
import {ModalRoutageVideo} from "../../modals/modal-routage-video/modal-routage-video.component";
import { ModalDeconnexionComponent } from 'src/app/connexion/modals/modal-deconnexion/modal-deconnexion.component';
import { PageConnexionComponent } from 'src/app/connexion/pages/page-connexion/page-connexion.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  @ViewChild('video') video: ElementRef<HTMLVideoElement> | undefined;

  private trigger : Subject<any> = new Subject();

  public displayvideo : boolean = true;

  public thinMenu : boolean = false;

  public functionSelected : any = 0;

  public dnsVideo : any = this.videoService.path;

  public portvideo : any = this.videoService.port;

  public TABMenu : any[] = [
    {
      img: 'assets/icones/routage.png',
      nomDisplay : 'Affichage du flux vidéo'
    },
    {
      img: 'assets/icones/routage.png',
      nomDisplay : 'Routage du flux vidéo'
    },
    {
      img: 'assets/icones/traitement.png',
      nomDisplay : 'Lancement de traitements vidéos'
    },
    {
      img: 'assets/icones/photo.png',
      nomDisplay : 'Prise de photo dans le flux vidéo'
    },
    {
      img: 'assets/icones/enregistrement.png',
      nomDisplay : 'Enregistrement de séquences vidéos'
    }
    /*{
      img: 'assets/icones/connexion.png',
      nomDisplay : 'Connexion'
    }*/
  ];

  constructor(private dialog:MatDialog, public userConnexionService: UserConnexionService, public videoService : VideoService) {
  }

  ngOnInit(): void {}

  public triggerSnapshot(): void {

    this.trigger.next(1);

  }

  public get triggerObservable(): Observable<any> {

    return this.trigger.asObservable();

  }

  public choixFunction(index:any){
    this.functionSelected = index;
    switch(index){
      case 1 :
        this.openModalRoutageVideo();
        break;
      case 5 :
        this.dialog.open(PageConnexionComponent, {
          width: '40%',
          height: '40%',
          data: {}
        });
        break;

      default :
        break;
    }
  }

  public openModalRoutageVideo() {

    this.displayvideo = false;

    let dialogRef = this.dialog.open(ModalRoutageVideo, {
      width: '40%',
      height: '40%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.displayvideo = true;
      this.functionSelected = 0;
    });

  }

  public openModalVideFullScreen() {

    this.displayvideo = false;

    let dialogRef = this.dialog.open(ModalVideFullScreen, {
      width: '90%',
      height: '95%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.displayvideo = true;
      this.functionSelected = 0;
    });

  }
}
