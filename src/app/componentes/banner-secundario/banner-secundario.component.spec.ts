import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSecundarioComponent } from './banner-secundario.component';

describe('BannerSecundarioComponent', () => {
  let component: BannerSecundarioComponent;
  let fixture: ComponentFixture<BannerSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSecundarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
