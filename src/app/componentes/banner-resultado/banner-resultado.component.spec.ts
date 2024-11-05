import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerResultadoComponent } from './banner-resultado.component';

describe('BannerResultadoComponent', () => {
  let component: BannerResultadoComponent;
  let fixture: ComponentFixture<BannerResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerResultadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
