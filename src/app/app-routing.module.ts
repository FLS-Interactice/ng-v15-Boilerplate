import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { OneColumnTemplateComponent } from './components/pages/one-column-template/one-column-template.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { TwoColumnTemplateSideRailComponent } from './components/pages/two-column-template-side-rail/two-column-template-side-rail.component';



const routes: Routes = [
  { 
    path: '', 
    component: HomePageComponent,
    data: {
      title: 'Home',
      description: 'This is the home page',
      ogTitle: 'This is the og Title',
      ogDescription: 'This is the og description',
      ogImage: 'og Image placeholder'
      
    }
  },
  { 
    path: 'about-us', 
    component: AboutUsComponent,
    data: {
      title: 'About Us',
      description: 'This is the About Us page'
    }
  },
  { 
    path: 'one-column', 
    component: OneColumnTemplateComponent,
    title: 'One Column Page Template'
  },
  { 
    path: 'two-column', 
    component: TwoColumnTemplateSideRailComponent
  },


  // Wild card route for 404 page
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
