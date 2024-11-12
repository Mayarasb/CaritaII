import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoNoticiasComponent } from './doacao-noticias.component';

describe('DoacaoNoticiasComponent', () => {
  let component: DoacaoNoticiasComponent;
  let fixture: ComponentFixture<DoacaoNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoacaoNoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoacaoNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
