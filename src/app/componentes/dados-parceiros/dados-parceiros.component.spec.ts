import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosParceirosComponent } from './dados-parceiros.component';

describe('DadosParceirosComponent', () => {
  let component: DadosParceirosComponent;
  let fixture: ComponentFixture<DadosParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosParceirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
