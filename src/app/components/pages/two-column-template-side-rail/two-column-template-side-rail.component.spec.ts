import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnTemplateSideRailComponent } from './two-column-template-side-rail.component';

describe('TwoColumnTemplateSideRailComponent', () => {
  let component: TwoColumnTemplateSideRailComponent;
  let fixture: ComponentFixture<TwoColumnTemplateSideRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnTemplateSideRailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnTemplateSideRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
