import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'about-us', component: AboutUsComponent},



  // Wild card route for 404 page
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
