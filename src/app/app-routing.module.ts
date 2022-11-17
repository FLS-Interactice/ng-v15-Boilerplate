import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { OneColumnTemplateComponent } from './components/pages/one-column-template/one-column-template.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { TwoColumnTemplateSideRailComponent } from './components/pages/two-column-template-side-rail/two-column-template-side-rail.component';



const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'one-column', component: OneColumnTemplateComponent},
  { path: 'two-column', component: TwoColumnTemplateSideRailComponent},


  // Wild card route for 404 page
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
