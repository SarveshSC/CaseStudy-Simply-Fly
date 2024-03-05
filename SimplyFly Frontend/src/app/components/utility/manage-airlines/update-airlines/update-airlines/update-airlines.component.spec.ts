import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAirlinesComponent } from './update-airlines.component';

describe('UpdateAirlinesComponent', () => {
  let component: UpdateAirlinesComponent;
  let fixture: ComponentFixture<UpdateAirlinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAirlinesComponent]
    });
    fixture = TestBed.createComponent(UpdateAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
