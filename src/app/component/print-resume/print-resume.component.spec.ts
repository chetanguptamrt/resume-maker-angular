import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintResumeComponent } from './print-resume.component';

describe('PrintResumeComponent', () => {
  let component: PrintResumeComponent;
  let fixture: ComponentFixture<PrintResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
