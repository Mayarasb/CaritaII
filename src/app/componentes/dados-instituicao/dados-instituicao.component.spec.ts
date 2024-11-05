import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosInstituicaoComponent } from './dados-instituicao.component';

describe('DadosInstituicaoComponent', () => {
  let component: DadosInstituicaoComponent;
  let fixture: ComponentFixture<DadosInstituicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosInstituicaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
