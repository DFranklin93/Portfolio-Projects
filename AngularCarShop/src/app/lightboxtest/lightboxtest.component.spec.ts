import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxtestComponent } from './lightboxtest.component';

describe('LightboxtestComponent', () => {
  let component: LightboxtestComponent;
  let fixture: ComponentFixture<LightboxtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightboxtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightboxtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
