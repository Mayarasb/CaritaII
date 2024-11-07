import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaContatoComponent } from './pagina-contato.component';

describe('PaginaContatoComponent', () => {
  let component: PaginaContatoComponent;
  let fixture: ComponentFixture<PaginaContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
