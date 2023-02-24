import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {VideoService} from "../../services/video.service";
import {ModalVideFullScreen} from "../../modals/modal-video-full-screen/modal-video-full-screen.component";
import {MatDialog} from "@angular/material/dialog";
import {ApiRequestService} from "../../services/api-request.service";
import { ModalParametresVideoComponent } from 'src/app/modals/modal-parametres-video/modal-parametres-video.component';
import {UserNavigationService} from "../../services/user-navigation.service";

@Component({
  selector: 'app-camera-mobile',
  templateUrl: './camera-mobile.component.html',
  styleUrls: ['./camera-mobile.component.scss']
})
export class CameraMobileComponent implements OnInit, OnChanges {

  @Input() id : any = null;

  @Input() displayArrowLeft : boolean = false;

  @Input() displayArrowRight : boolean = false;

  @Input() widthVideo : any = null;

  @Input() heightVideo : any = null;

  @Input() data : any = {
    dns : null,
    uri : null
  };

  @Output() public changeRoute = new EventEmitter();

  public displayVideo : boolean = true;

  public functionSelected : any = 0;

  public isLoadingVideo : boolean = false;

  public isLoadingPicture : boolean = false;

  public showToggle : boolean = false;

  public traitementVideo : boolean = false;

  public record : boolean = false;

  public urlFlaskVideo : any = null;

  constructor( private dialog: MatDialog, public videoService : VideoService, public apiRequestService: ApiRequestService, public userNavigationService : UserNavigationService) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.id) {
      this.setUrlVideo();
    }
  }

  public setUrlVideo(){
    if(this.data.dns) {
      // this.isLoadingVideo = true
      this.urlFlaskVideo = this.apiRequestService.getDnsVideoFlaskApi(this.id, this.data, this.traitementVideo);

      // this.apiRequestService.getVideoFlaskApi(this.id, this.data, this.traitementVideo).subscribe( (data : any) => {
      //   this.isLoadingVideo = false
      //   this.urlFlaskVideo = this.apiRequestService.getDnsVideoFlaskApi(this.id, this.data, this.traitementVideo);
      //
      // })
    }
    else {
      this.isLoadingVideo = false
      this.displayVideo = false;
    }
  }

  public openModalVideFullScreen() {

    this.displayVideo = false;
    this.showToggle = false;

    let dataForModal : any = {
      dnsVideo : this.urlFlaskVideo
    }

    let dialogRef = this.dialog.open(ModalVideFullScreen, {
      hasBackdrop: false,
      width: '100%',
      height: '100%',
      data: dataForModal
    });

    dialogRef.afterClosed().subscribe(() => {
      this.displayVideo = true;
    });

  }

  public openModalParametresVideoComponent() {

    this.displayVideo = false;

    this.showToggle = false;

    let dialogRef = this.dialog.open(ModalParametresVideoComponent, {
      width: '40%',
      height: '40%',
      data: {
        ...this.data
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      if(dialogRef.componentInstance.closeConfirm) {
        this.data.dns = dialogRef.componentInstance.dnsVideo
        this.data.uri = dialogRef.componentInstance.uriVideo
        this.displayVideo = true;
        this.functionSelected = 0;
        this.changeRoute.emit(true);
        this.setUrlVideo();
      }
    });

  }

  public openModalParametresVideo(){

    this.showToggle = false;


    let dialogRef = this.dialog.open(ModalParametresVideoComponent, {
      width: '40%',
      height: '40%',
      data: {
        ...this.data,
        displayParams : true
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      if(dialogRef.componentInstance.closeConfirm) {
        this.data.dns = dialogRef.componentInstance.dnsVideo
        this.data.uri = dialogRef.componentInstance.uriVideo
        this.displayVideo = true;
        this.functionSelected = 0;
        this.changeRoute.emit(true);
        this.setUrlVideo();
      }
    });
  }

  public launchRecording(){
    let url : any = this.urlFlaskVideo;

    if(!this.record) {
      this.apiRequestService.POSTStartRecording(url).subscribe((data: any) => {
        if (data) {
          this.record = !this.record
        }
      })
    }
    else{
      this.apiRequestService.GETStopRecording(this.id).subscribe((data: any) => {
        if (data) {
          this.record = !this.record
        }
      })
    }
  }

  public resetVideo(){

    this.data.dns = null;
    this.data.uri = null;
    this.urlFlaskVideo = null;
    this.displayVideo = false;
    this.changeRoute.emit(true);
    this.apiRequestService.GETStopVideo(this.id).subscribe((data: any) => {
      if (data) {
      }
    })
  }

  //Pour modifier l'ordre d'affichage dans la page d'accueil
  public changeId(incrementation : boolean = false){

    let indexInTab = this.id - 1;
    let TABVideo : any[] = this.videoService.getTABvideo();

    let temp = TABVideo[indexInTab];

    if(incrementation && this.id <= TABVideo.length){
      //On le déplace plus loin dans le tableau
      let suivant = indexInTab + 1;
      TABVideo.splice(indexInTab, 1, TABVideo[suivant]);
      TABVideo.splice(suivant, 1, temp);
    }
    else if(this.id > 1){
      //on le recule
      let precedent = indexInTab - 1;
      TABVideo.splice(indexInTab, 1, TABVideo[precedent]);
      TABVideo.splice(precedent, 1, temp);
    }

    console.log(TABVideo)
    //TODO Lorsque les vidéos fontionneront, pusher le tableau dans le local storage à l'aide de la fonction du service VideoService
  }

}
