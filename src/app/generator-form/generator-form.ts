import { Component, input, output, signal } from '@angular/core';
import { InputRangeSlider } from "./input-rangeSlider/input-range-slider";
import { InputCheckbox } from './input-checkbox/input-checkbox';
import { InputCheckboxInterface } from './input-checkbox/input-checkbox.interface'
import { InputRangeSliderInterface } from './input-rangeSlider/input-range-slider.interface';


@Component({
  selector: 'app-generator-form',
  imports: [InputRangeSlider, InputCheckbox],
  templateUrl: './generator-form.html',
  styleUrl: './generator-form.scss',
  standalone: true,
})
export class GeneratorForm {
  passwordRating = input<'TOO WEAK!' | 'WEAK' | 'MEDIUM' | 'STRONG' | ''>('');
  // Range Slider
  passwordLength = signal(10);
  passwordLengthChange = output<number>();
  rangeSliderConfig: InputRangeSliderInterface = {
    label: {
      text: 'Character Length',
      location: 'before' as const,
    },
    name: 'password-length',
    id: 'range-length',
    min: 0,
    max: 20,
    value: 10,
  };

  onLengthChange(value: number): void {
    this.passwordLength.set(value);
    this.passwordLengthChange.emit(value);
  }

  // Checkboxes
  checkboxChange = output<{
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }>();

  trackByCheckboxId(index: number, checkbox: InputCheckboxInterface): string {
    return checkbox.id;
  }

  // Checkbox Configuration
  allowUppercase: InputCheckboxInterface = {
    label: { text: 'Include Uppercase Letters', location: 'after' },
    id: 'chk-upper',
    name: 'allow-uppercase',
  };
  allowLowercase: InputCheckboxInterface = {
    label: { text: 'Include Lowercase Letters', location: 'after' },
    id: 'chk-lower',
    name: 'allow-lowercase',
  };
  allowNumbers: InputCheckboxInterface = {
    label: { text: 'Include Numbers', location: 'after' },
    id: 'chk-numbers',
    name: 'allow-numbers',
  };
  allowSymbols: InputCheckboxInterface = {
    label: { text: 'Include Symbols', location: 'after' },
    id: 'chk-symbols',
    name: 'allow-symbols',
  };

  // used for the @for rendering in the HTML
  checkboxes = [this.allowUppercase, this.allowLowercase, this.allowNumbers, this.allowSymbols];

  // Signal Creation for the four checkboxes
  checkboxState = signal({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  // Method to retrieve the current state of a checkbox by name
  getCheckedState(name: string): boolean {
    return (
      {
        'allow-uppercase': this.checkboxState().uppercase,
        'allow-lowercase': this.checkboxState().lowercase,
        'allow-numbers': this.checkboxState().numbers,
        'allow-symbols': this.checkboxState().symbols,
      }[name] ?? false
    );
  }

  // Method to toggle the state of a checkbox by name
  toggleCheckbox(checked: boolean, name: string) {
    const current = this.checkboxState();

    const nextState = {
      ...current,
      ...(name === 'allow-uppercase' ? { uppercase: checked } : {}),
      ...(name === 'allow-lowercase' ? { lowercase: checked } : {}),
      ...(name === 'allow-numbers' ? { numbers: checked } : {}),
      ...(name === 'allow-symbols' ? { symbols: checked } : {}),
    };

    this.checkboxState.set(nextState);
    this.checkboxChange.emit(nextState);
  }

  // Button:
  generateClick = output<void>();

  onGenerate() {
    this.generateClick.emit();
  }
}
