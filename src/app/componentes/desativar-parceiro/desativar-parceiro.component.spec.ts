import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesativarParceiroComponent } from './desativar-parceiro.component';

describe('DesativarParceiroComponent', () => {
  let component: DesativarParceiroComponent;
  let fixture: ComponentFixture<DesativarParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesativarParceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesativarParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
