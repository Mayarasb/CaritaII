import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInformativoComponent } from './card-somoscarita.component';

describe('CardInformativoComponent', () => {
  let component: CardInformativoComponent;
  let fixture: ComponentFixture<CardInformativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInformativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInformativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
