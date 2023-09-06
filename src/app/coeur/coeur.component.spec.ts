import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeurComponent } from './coeur.component';

describe('CoeurComponent', () => {
  let component: CoeurComponent;
  let fixture: ComponentFixture<CoeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoeurComponent]
    });
    fixture = TestBed.createComponent(CoeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
