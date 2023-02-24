import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortenurlComponent } from './components/shortenurl/shortenurl.component';

const routes: Routes = [

  { path: 'shortenurl', component: ShortenurlComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
