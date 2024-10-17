import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPrincipalComponent } from './banner-principal.component';

describe('BannerPrincipalComponent', () => {
  let component: BannerPrincipalComponent;
  let fixture: ComponentFixture<BannerPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
