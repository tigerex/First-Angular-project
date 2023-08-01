import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieItemComponent } from './modifie-item.component';

describe('ModifieItemComponent', () => {
  let component: ModifieItemComponent;
  let fixture: ComponentFixture<ModifieItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifieItemComponent]
    });
    fixture = TestBed.createComponent(ModifieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
