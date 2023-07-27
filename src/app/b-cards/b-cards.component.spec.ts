import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCardsComponent } from './b-cards.component';

describe('BCardsComponent', () => {
  let component: BCardsComponent;
  let fixture: ComponentFixture<BCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BCardsComponent]
    });
    fixture = TestBed.createComponent(BCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
