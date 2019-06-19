import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FilesComponent } from './files/files.component';
import {AddGuitarComponent} from './add-guitar/add-guitar.component';
import {EditGuitarComponent} from './edit-guitar/edit-guitar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Welcome to the Clarity Guitar Store'}
  },
  {
    path: 'list',
    component: FilesComponent,
    data: {title: 'Welcome to the Clarity Guitar Store'}
  },
  {
    path: 'add-guitar',
    component: AddGuitarComponent,
  },
  {
    path: 'edit-guitar/:id',
    component: EditGuitarComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
