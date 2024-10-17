import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoajudarPIComponent } from './comoajudar-pi.component';

describe('ComoajudarPIComponent', () => {
  let component: ComoajudarPIComponent;
  let fixture: ComponentFixture<ComoajudarPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoajudarPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoajudarPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
