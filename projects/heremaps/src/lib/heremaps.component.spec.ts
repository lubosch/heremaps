import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeremapsComponent } from './heremaps.component';

describe('HeremapsComponent', () => {
  let component: HeremapsComponent;
  let fixture: ComponentFixture<HeremapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeremapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeremapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
