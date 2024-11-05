import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceirosComponent } from './parceiros.component';

describe('ParceirosComponent', () => {
  let component: ParceirosComponent;
  let fixture: ComponentFixture<ParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParceirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
