import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBasicComponent } from './type-basic.component';

describe('TypeBasicComponent', () => {
  let component: TypeBasicComponent;
  let fixture: ComponentFixture<TypeBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
