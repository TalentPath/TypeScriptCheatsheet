import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetClassComponent } from './planet-class.component';

describe('PlanetClassComponent', () => {
  let component: PlanetClassComponent;
  let fixture: ComponentFixture<PlanetClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
