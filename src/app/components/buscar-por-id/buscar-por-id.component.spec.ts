import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorIdComponent } from './buscar-por-id.component';

describe('BuscarPorIdComponent', () => {
  let component: BuscarPorIdComponent;
  let fixture: ComponentFixture<BuscarPorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPorIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
