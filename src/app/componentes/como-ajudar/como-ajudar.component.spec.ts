import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoAjudarComponent } from './como-ajudar.component';

describe('ComoAjudarComponent', () => {
  let component: ComoAjudarComponent;
  let fixture: ComponentFixture<ComoAjudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoAjudarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoAjudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
