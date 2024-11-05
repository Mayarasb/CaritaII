import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSobreComponent } from './banner-sobre.component';

describe('BannerSobreComponent', () => {
  let component: BannerSobreComponent;
  let fixture: ComponentFixture<BannerSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSobreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
