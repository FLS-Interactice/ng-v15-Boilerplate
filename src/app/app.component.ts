import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }


  ngOnInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
    )
      .subscribe(() => {
        const route = this.getChild(this.activatedRoute)
        const data = route.snapshot.data;
        const desc = data.description;
        const ogTitle = data.ogTitle;
        const ogDesc = data.ogDescription;
        const ogImage = data.ogImage;
        // set title and description
        this.titleService.setTitle(data.title);        
        this.metaService.updateTag({ name: 'description', content: desc });
        // optional open graph tags
        if (ogTitle){
          this.metaService.updateTag({ property: 'og:title', content: ogTitle });
        } else {
          this.metaService.removeTag('property="og:title"');
        }         
        if (ogDesc){
          this.metaService.updateTag({ property: 'og:description', content: ogDesc });
        } else {
          this.metaService.removeTag('property="og:description"');
        } 
        if (ogImage){
          this.metaService.updateTag({ property: 'og:image', content: 'https://www.imagehost.url/' + ogImage });
        } else {
          this.metaService.removeTag('property="og:image"');
        } 

      })
  }
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild)
      return this.getChild(activatedRoute.firstChild);
    else
      return activatedRoute;
  }
}
