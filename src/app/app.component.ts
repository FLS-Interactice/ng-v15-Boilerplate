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
        this.titleService.setTitle(data.title);        
        this.metaService.updateTag({ name: 'description', content: desc });
        this.metaService.updateTag({ name: 'og:title', content: data.title });
      })
  }
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild)
      return this.getChild(activatedRoute.firstChild);
    else
      return activatedRoute;
  }
}
