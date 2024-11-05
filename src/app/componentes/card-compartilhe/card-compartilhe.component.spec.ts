import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompartilheComponent } from './card-compartilhe.component';

describe('CardCompartilheComponent', () => {
  let component: CardCompartilheComponent;
  let fixture: ComponentFixture<CardCompartilheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCompartilheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCompartilheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
