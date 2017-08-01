import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class AppService {
  private serverUrl = "https://jsonplaceholder.typicode.com";
  private user:any;
  private album:any;
 

  constructor (private http: Http) {}

  //set userid
  setUser(userIdValue:any) {
    this.user = userIdValue;
  }
  
  //get userid
  getUser() : Observable<any> {
    return this.user;
  }
  

  setAlbum(albumValue:any) {
    this.album = albumValue;
  }
  
  
  getAlbum() : Observable<any> {
    return this.album;
  }

  //get user list
  getUserList() :Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.get(this.serverUrl+"/users", options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  //get user list
  getUserAlbum(userId:any) :Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.get(this.serverUrl+"/albums" +'?userId='+userId, options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  //get user list
  getUserImages(albumId:any) :Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.get(this.serverUrl+"/photos" +'?albumId='+albumId, options)
    .map(this.extractData)
    .catch(this.handleError);
  }



  //extract data
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  //handle exception
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  
}