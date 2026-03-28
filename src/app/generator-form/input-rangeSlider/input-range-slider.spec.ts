import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRangeSlider } from './input-range-slider';

describe('InputRangeSlider', () => {
  let component: InputRangeSlider;
  let fixture: ComponentFixture<InputRangeSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputRangeSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(InputRangeSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
