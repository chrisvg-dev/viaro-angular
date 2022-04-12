import { TestBed } from '@angular/core/testing';

import { GradoAlumnoService } from './grado-alumno.service';

describe('GradoAlumnoService', () => {
  let service: GradoAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradoAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
