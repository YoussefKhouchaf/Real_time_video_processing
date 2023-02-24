import {Component, OnInit } from '@angular/core';
import {UserNavigationService} from "../../services/user-navigation.service";
import {VideoService} from "../../services/video.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-page-accueil-video',
  templateUrl: './page-accueil-video.component.html',
  styleUrls: ['./page-accueil-video.component.scss']
})
export class PageAccueilVideoComponent implements OnInit {

  public TABVideo : any[] = [];

  constructor(public userNavigationService: UserNavigationService, public videoService : VideoService) {
    this.TABVideo = this.videoService.getTABvideo();
  }

  ngOnInit(): void {}

  public setTabVideo(){
    this.videoService.setTABVideo(this.TABVideo);
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.TABVideo, event.previousIndex, event.currentIndex);
    this.setTabVideo();
  }
}
