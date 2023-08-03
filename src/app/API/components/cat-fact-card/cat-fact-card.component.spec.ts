import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactCardComponent } from './cat-fact-card.component';

describe('CatFactCardComponent', () => {
  let component: CatFactCardComponent;
  let fixture: ComponentFixture<CatFactCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatFactCardComponent]
    });
    fixture = TestBed.createComponent(CatFactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
