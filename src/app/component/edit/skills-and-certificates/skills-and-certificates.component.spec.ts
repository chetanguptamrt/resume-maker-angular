import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndCertificatesComponent } from './skills-and-certificates.component';

describe('SkillsAndCertificatesComponent', () => {
  let component: SkillsAndCertificatesComponent;
  let fixture: ComponentFixture<SkillsAndCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAndCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAndCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
