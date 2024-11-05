import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesativarContaComponent } from './desativar-conta.component';

describe('DesativarContaComponent', () => {
  let component: DesativarContaComponent;
  let fixture: ComponentFixture<DesativarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesativarContaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesativarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
