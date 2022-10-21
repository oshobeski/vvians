import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StravaComponent } from './strava.component';

describe('StravaComponent', () => {
  let component: StravaComponent;
  let fixture: ComponentFixture<StravaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StravaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
