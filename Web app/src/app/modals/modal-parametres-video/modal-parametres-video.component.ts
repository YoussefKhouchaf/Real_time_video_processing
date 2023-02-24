import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {VideoService} from "../../services/video.service";

@Component({
  selector: 'app-modal-parametres-video',
  templateUrl: './modal-parametres-video.component.html',
  styleUrls: ['./modal-parametres-video.component.scss']
})

/**
 * TODO Ce component est spécifique à l'application IP Webcam
 * La variable dnsVideo correspond à l'adresse IP d'une caméra
 * La variable uriVideo correspond au chemin pour accéder au flux vidéo
 * En utilisant IP WebCam, il faut associer les 2 pour voir les vidéos
 */
export class ModalParametresVideoComponent implements OnInit {

  public dnsVideo: any = null;

  public uriVideo : any = null;

  public hide: boolean = true;

  public displayParams : boolean = false;

  public closeConfirm : boolean = false;

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {

    let e = <KeyboardEvent>event;

    switch (e.keyCode) {

      case 13://Enter
        this.validation();
        break;

      default:
        break;
    }

  }

  constructor(public dialogRef: MatDialogRef<ModalParametresVideoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private dialog:MatDialog, private videoService : VideoService) {
    this.dnsVideo = data.dns;
    this.uriVideo = data.uri;
    this.displayParams = data.displayParams ? data.displayParams : false;
  }

  ngOnInit() {}

  public closeModal(){
    this.dialogRef.close();
  }

  public validation(){
    this.closeConfirm = true
    this.closeModal();
  }


}
