import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserComponent } from './user/user.component';
import { AppService } from './app.service';
import { AlbumComponent } from './album/album.component';
import { ImageComponent } from './images-module/images.component';

const appRoutes: Routes = [
   {path:'',component: UserComponent},
   {path:'user',component: UserComponent},
   { path: 'album', component: AlbumComponent },
   { path: 'images', component: ImageComponent },
];

@NgModule({
  imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,UserComponent,AlbumComponent,ImageComponent],
  providers:    [AppService],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
