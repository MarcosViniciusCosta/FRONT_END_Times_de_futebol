import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoPrimeiroComponent } from './filho-primeiro.component';

describe('FilhoPrimeiroComponent', () => {
  let component: FilhoPrimeiroComponent;
  let fixture: ComponentFixture<FilhoPrimeiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilhoPrimeiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilhoPrimeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
