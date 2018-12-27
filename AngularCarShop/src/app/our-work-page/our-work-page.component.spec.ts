import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkPageComponent } from './our-work-page.component';

describe('OurWorkPageComponent', () => {
  let component: OurWorkPageComponent;
  let fixture: ComponentFixture<OurWorkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWorkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
