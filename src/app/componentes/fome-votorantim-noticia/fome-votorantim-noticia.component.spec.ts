import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomeVotorantimNoticiaComponent } from './fome-votorantim-noticia.component';

describe('FomeVotorantimNoticiaComponent', () => {
  let component: FomeVotorantimNoticiaComponent;
  let fixture: ComponentFixture<FomeVotorantimNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomeVotorantimNoticiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomeVotorantimNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
