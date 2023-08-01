import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCarouselComponent } from './text-carousel.component';

describe('TextCarouselComponent', () => {
  let component: TextCarouselComponent;
  let fixture: ComponentFixture<TextCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextCarouselComponent]
    });
    fixture = TestBed.createComponent(TextCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
