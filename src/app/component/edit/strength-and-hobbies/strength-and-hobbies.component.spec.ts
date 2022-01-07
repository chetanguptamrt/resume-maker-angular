import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthAndHobbiesComponent } from './strength-and-hobbies.component';

describe('StrengthAndHobbiesComponent', () => {
  let component: StrengthAndHobbiesComponent;
  let fixture: ComponentFixture<StrengthAndHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthAndHobbiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthAndHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
