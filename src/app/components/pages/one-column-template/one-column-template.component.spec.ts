import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColumnTemplateComponent } from './one-column-template.component';

describe('OneColumnTemplateComponent', () => {
  let component: OneColumnTemplateComponent;
  let fixture: ComponentFixture<OneColumnTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneColumnTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneColumnTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
