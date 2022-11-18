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
        let route = this.getChild(this.activatedRoute)
        let data = route.snapshot.data;
        let desc = data.description;
        let ogTitle = data.ogTitle;
        let ogDesc = data.ogDescription;
        let ogImage = data.ogImage;
        this.titleService.setTitle(data.title);        
        this.metaService.updateTag({ name: 'description', content: desc });
        // optional open graph tags
        if (ogTitle){
          this.metaService.updateTag({ name: 'og:title', content: ogTitle });
        } else {
          this.metaService.removeTag('name="og:title"');
        }         
        if (ogDesc){
          this.metaService.updateTag({ name: 'og:description', content: ogDesc });
        } else {
          this.metaService.removeTag('name="og:description"');
        } 
        if (ogImage){
          this.metaService.updateTag({ name: 'og:image', content: ogImage });
        } else {
          this.metaService.removeTag('name="og:image"');
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
