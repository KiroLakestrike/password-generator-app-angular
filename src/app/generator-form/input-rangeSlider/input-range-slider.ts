import { Component, input, model } from '@angular/core';
import { InputRangeSliderInterface } from './input-range-slider.interface'

@Component({
  selector: 'app-input-range-slider',
  imports: [],
  templateUrl: './input-range-slider.html',
  styleUrl: './input-range-slider.scss',
})
export class InputRangeSlider {
  rangeSlider = input.required<InputRangeSliderInterface>();
  length = model(12);

  onInput(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    this.length.set(Number(inputEl.value));
  }
}
