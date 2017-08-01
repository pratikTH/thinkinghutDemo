import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router }  from '@angular/router'; 

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
})
export class AlbumComponent  { 

  public userId:any;
  public albumList:any;
  public showAblum:any;

  constructor(public appService:AppService,private _router: Router){
    this.userId = this.appService.getUser();
    this.appService.getUserAlbum(this.userId.id).subscribe((data)=>{
      this.albumList = data;
    });
  }

  navigateImage(album:any) {

    this.appService.setAlbum(album);
    this._router.navigate(['/images'])
  }

  navigateUser() {

    this._router.navigate([''])
  }
  
}
