import { Component, signal } from '@angular/core';
import { RangeSliderInterface } from './range-slider.interface'

@Component({
  selector: 'app-range-slider',
  imports: [],
  templateUrl: './range-slider.html',
  styleUrl: './range-slider.scss',
})
export class RangeSlider {
  

  rangeSlider: RangeSliderInterface = {
    label: { 
      text: 'Password Lenght',
      location: 'before',  
    },
    name:'password-lenght',
    id: 'range-length',
    min:0,
    max:24,
    value: 12,
  }

  value = signal(this.rangeSlider.value);
}
