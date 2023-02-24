import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router, Event, NavigationEnd, ActivatedRoute} from '@angular/router';
import {UserNavigationService} from "../../services/user-navigation.service";
import {VideoService} from "../../services/video.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild('video') video: ElementRef<HTMLVideoElement> | undefined;

  public displayvideo : boolean = true;

  public functionSelected : any = 0;

  public TABMenu : any[] = [
    {
      img: 'assets/icones/paramètre.png',
      nomDisplay : 'Accueil',
      route : '/accueil',
      admin : false,
      type : 'route'
    },
    {
      img: 'assets/icones/routage.png',
      nomDisplay : 'Réglage',
      admin : true,
      type : 'toggle'
    },
    {
      img: 'assets/icones/connexion.png',
      nomDisplay : 'Connexion',
      route : '/connexion',
      admin : false,
      type : 'route'
    }
  ];

  public activeUrl : string = "";


  constructor(public userNavigationService: UserNavigationService, public videoService : VideoService, private router : Router, private activatedRoute:ActivatedRoute) {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.activeUrl = event.url;
      }
    });

  }

  public changeRoute(route : any){
    this.router.navigate([route], {relativeTo: this.activatedRoute.parent});
  }

}
