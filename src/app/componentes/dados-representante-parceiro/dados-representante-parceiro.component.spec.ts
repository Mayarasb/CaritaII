import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosRepresentanteParceiroComponent } from './dados-representante-parceiro.component';

describe('DadosRepresentanteParceiroComponent', () => {
  let component: DadosRepresentanteParceiroComponent;
  let fixture: ComponentFixture<DadosRepresentanteParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosRepresentanteParceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosRepresentanteParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
