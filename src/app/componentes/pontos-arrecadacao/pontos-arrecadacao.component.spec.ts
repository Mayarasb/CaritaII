import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosArrecadacaoComponent } from './pontos-arrecadacao.component';

describe('PontosArrecadacaoComponent', () => {
  let component: PontosArrecadacaoComponent;
  let fixture: ComponentFixture<PontosArrecadacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PontosArrecadacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PontosArrecadacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
