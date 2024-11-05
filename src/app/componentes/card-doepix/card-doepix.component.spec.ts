import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDoepixComponent } from './card-doepix.component';

describe('CardDoepixComponent', () => {
  let component: CardDoepixComponent;
  let fixture: ComponentFixture<CardDoepixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDoepixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDoepixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
