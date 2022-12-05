import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTimeComponent } from './formulario-time.component';

describe('FormularioTimeComponent', () => {
  let component: FormularioTimeComponent;
  let fixture: ComponentFixture<FormularioTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
