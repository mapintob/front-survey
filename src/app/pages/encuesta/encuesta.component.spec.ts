import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaComponent } from './encuesta.component';

describe('EncuestaComponent', () => {
  let component: EncuestaComponent;
  let fixture: ComponentFixture<EncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should email input be invalid', () => {
    const email = component.surveyForm.controls['email'];
    email.setValue('prueba.');
    expect(email.hasError('emailError')).toBeTruthy();
  });
  it('should musicStyle input have required error', () => {
    const errors = component.surveyForm.controls['musicStyle'].errors || {};
    expect(errors['required']).toBeTruthy();
  });
});
