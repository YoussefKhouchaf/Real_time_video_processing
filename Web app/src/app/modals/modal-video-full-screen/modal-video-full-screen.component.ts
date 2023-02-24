import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialog, MatDialogRef} from "@angular/material/dialog";
import {VideoService} from "../../services/video.service";

@Component({
  selector: 'app-modal-video-full-screen',
  templateUrl: './modal-video-full-screen.component.html',
  styleUrls: ['./modal-video-full-screen.component.css']
})
export class ModalVideFullScreen implements OnInit{

  public dnsVideo: any = null;

  constructor(public dialogRef: MatDialogRef<ModalVideFullScreen>, @Inject(MAT_DIALOG_DATA) public data: any, private dialog:MatDialog, private videoService : VideoService) {
    this.dnsVideo = this.data.dnsVideo;
  }

  ngOnInit() {}

  public closeModal(){
    this.dialogRef.close();
  }

  public validation(){
    this.closeModal();
  }


}
