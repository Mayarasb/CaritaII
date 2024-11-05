import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSobrecaritaComponent } from './card-sobrecarita.component';

describe('CardSobrecaritaComponent', () => {
  let component: CardSobrecaritaComponent;
  let fixture: ComponentFixture<CardSobrecaritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSobrecaritaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSobrecaritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
