import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposLoginComponent } from './campos-login.component';

describe('CamposLoginComponent', () => {
  let component: CamposLoginComponent;
  let fixture: ComponentFixture<CamposLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamposLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamposLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
