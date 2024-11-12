import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPixComponent } from './pagina-pix.component';

describe('PaginaPixComponent', () => {
  let component: PaginaPixComponent;
  let fixture: ComponentFixture<PaginaPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
