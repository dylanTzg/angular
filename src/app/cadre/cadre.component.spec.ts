import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreComponent } from './cadre.component';

describe('CadreComponent', () => {
  let component: CadreComponent;
  let fixture: ComponentFixture<CadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadreComponent]
    });
    fixture = TestBed.createComponent(CadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
