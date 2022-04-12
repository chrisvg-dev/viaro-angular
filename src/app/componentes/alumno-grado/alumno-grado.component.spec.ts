import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoGradoComponent } from './alumno-grado.component';

describe('AlumnoGradoComponent', () => {
  let component: AlumnoGradoComponent;
  let fixture: ComponentFixture<AlumnoGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoGradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
