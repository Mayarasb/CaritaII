import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComoajudarComponent } from './pagina-comoajudar.component';

describe('PaginaComoajudarComponent', () => {
  let component: PaginaComoajudarComponent;
  let fixture: ComponentFixture<PaginaComoajudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaComoajudarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaComoajudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
