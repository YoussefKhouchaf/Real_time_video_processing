import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

/**
 * Ici sont listés tous les appels API du projet
 */

export class ApiRequestService{

  /**
   * TODO A modifier, en fonction de l'API Flask utilisée
   */
  private debutUriFlask : any = "http://127.0.0.1:8000";

  constructor(private http: HttpClient){}

  public getDnsVideoFlaskApi(id: any, data:any, traitement:any){
    traitement = traitement ? 1 : 0;
    let urlVideo = data.uri ? data.dns+data.uri : data.dns;

    if(traitement == 0 && (data.dns != "0" || data.dns != 0 )) return urlVideo;
    return this.debutUriFlask + "/video_feed/"+ encodeURIComponent(id) +"?url=" + encodeURIComponent(urlVideo) + "&traitement=" + encodeURIComponent(traitement);
  }

  public getVideoFlaskApi(id: any, data:any, traitement:any){
    traitement = traitement ? 1 : 0;
    let urlVideo = data.uri ? data.dns+data.uri : data.dns;
    let uri = this.debutUriFlask + "/video_feed/"+ encodeURIComponent(id) +"?url=" + encodeURIComponent(urlVideo) + "&traitement=" + encodeURIComponent(traitement)
    return this.http.get(uri);
  }

  public POSTStartVideo(id:any, url : any, traitement : any){
    let uri = this.debutUriFlask + '/start_video/'+encodeURIComponent(id);
    let body : any = {
      url : url,
      traitement : traitement
    }
    return this.http.post<any>(uri, body);
  }

  public GETStopVideo(id:any){
    let uri = this.debutUriFlask + '/stop_feed/'+encodeURIComponent(id);
    return this.http.get<any>(uri);
  }

  public POSTStartRecording(url : any){
    let uri = this.debutUriFlask + '/start_recording';
    let body : any = {
      url : url
    }
    return this.http.post<any>(uri, body);
  }

  public GETStopRecording(url : any){
    let uri = this.debutUriFlask + '/stop_recording';
    return this.http.get<any>(uri);
  }
}
