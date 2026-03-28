import { Component, signal } from '@angular/core';
import { RangeSlider } from "../range-slider/range-slider";

@Component({
  selector: 'app-generator-form',
  imports: [RangeSlider],
  templateUrl: './generator-form.html',
  styleUrl: './generator-form.scss',
})
export class GeneratorForm {

}
