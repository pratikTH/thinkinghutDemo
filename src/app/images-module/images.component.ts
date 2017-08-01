import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router }  from '@angular/router'; 

@Component({
  selector: 'my-app',
  templateUrl: './images.component.html',
})
export class ImageComponent  { 
   public albumId:any;
  public imgList:any;
  constructor(public appService:AppService,private _router: Router){
    this.albumId = this.appService.getAlbum();
    this.appService.getUserImages(this.albumId.id).subscribe((data)=>{
      this.imgList = data.slice(0,5);
    });
  }

  navigateAlbum() {
    this._router.navigate(['/album'])
  }
}
