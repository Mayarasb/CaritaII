import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosArrecadacaoParceiroComponent } from './pontos-arrecadacao-parceiro.component';

describe('PontosArrecadacaoParceiroComponent', () => {
  let component: PontosArrecadacaoParceiroComponent;
  let fixture: ComponentFixture<PontosArrecadacaoParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PontosArrecadacaoParceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PontosArrecadacaoParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
