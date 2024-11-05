import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerConteudoComponent } from './banner-conteudo.component';

describe('BannerConteudoComponent', () => {
  let component: BannerConteudoComponent;
  let fixture: ComponentFixture<BannerConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerConteudoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
