import { PhotoListResolver } from './photos/ap-photo-list/ap-photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ApPhotoListComponent } from './photos/ap-photo-list/ap-photo-list.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user/:userName', component: ApPhotoListComponent,
resolve:{
  photos: PhotoListResolver
} },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
