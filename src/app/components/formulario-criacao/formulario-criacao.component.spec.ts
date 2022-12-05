import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriacaoComponent } from './formulario-criacao.component';

describe('FormularioCriacaoComponent', () => {
  let component: FormularioCriacaoComponent;
  let fixture: ComponentFixture<FormularioCriacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCriacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
