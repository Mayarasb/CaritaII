import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrecadastroComponent } from './pagina-precadastro.component';

describe('PaginaPrecadastroComponent', () => {
  let component: PaginaPrecadastroComponent;
  let fixture: ComponentFixture<PaginaPrecadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPrecadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPrecadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
