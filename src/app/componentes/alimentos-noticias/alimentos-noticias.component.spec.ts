import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentosNoticiasComponent } from './alimentos-noticias.component';

describe('AlimentosNoticiasComponent', () => {
  let component: AlimentosNoticiasComponent;
  let fixture: ComponentFixture<AlimentosNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentosNoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentosNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
