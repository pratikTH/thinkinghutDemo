import { Component } from '@angular/core';

import { AppService } from '../app.service';
import { Router }  from '@angular/router'; 



@Component({
  selector: 'user',
  templateUrl: `./user.component.html`,
})
export class UserComponent  { 
  public userlist:any;
  

  constructor(public appService:AppService,private _router: Router) {
    this.appService.getUserList().subscribe((data)=>{
      this.userlist = data;
    });
  }

  navigateAlbum(userObj:any) {
    this.appService.setUser(userObj);
    this._router.navigate(['/album']);
  }
}
