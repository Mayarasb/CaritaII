import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComoajudarComponent } from './banner-comoajudar.component';

describe('BannerComoajudarComponent', () => {
  let component: BannerComoajudarComponent;
  let fixture: ComponentFixture<BannerComoajudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComoajudarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerComoajudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
