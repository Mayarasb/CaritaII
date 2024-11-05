import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosRepresentanteComponent } from './dados-representante.component';

describe('DadosRepresentanteComponent', () => {
  let component: DadosRepresentanteComponent;
  let fixture: ComponentFixture<DadosRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosRepresentanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
