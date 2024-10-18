import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTrackerComponent } from './app-tracker.component';

describe('AppTrackerComponent', () => {
  let component: AppTrackerComponent;
  let fixture: ComponentFixture<AppTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
