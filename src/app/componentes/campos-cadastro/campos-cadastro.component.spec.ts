import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposCadastroComponent } from './campos-cadastro.component';

describe('CamposCadastroComponent', () => {
  let component: CamposCadastroComponent;
  let fixture: ComponentFixture<CamposCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamposCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamposCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
