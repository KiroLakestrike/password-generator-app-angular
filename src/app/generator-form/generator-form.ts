import { Component, output, signal, Signal, WritableSignal } from '@angular/core';
import { InputRangeSlider } from "./input-rangeSlider/input-range-slider";
import { InputCheckbox } from './input-checkbox/input-checkbox';
import { InputCheckboxInterface } from './input-checkbox/input-checkbox.interface'
import { InputRangeSliderInterface } from './input-rangeSlider/input-range-slider.interface';


@Component({
  selector: 'app-generator-form',
  imports: [InputRangeSlider, InputCheckbox],
  templateUrl: './generator-form.html',
  styleUrl: './generator-form.scss',
})
export class GeneratorForm {
  // Range Slider
  passwordLength = signal(12);
  passwordLengthChange = output<number>();
  rangeSliderConfig: InputRangeSliderInterface = {
    label: {
      text: 'Character Length',
      location: 'before' as const,
    },
    name: 'password-length',
    id: 'range-length',
    min: 0,
    max: 24,
    value: 12,
  };

  onLengthChange(value: number): void {
    this.passwordLength.set(value);
    this.passwordLengthChange.emit(value);
    console.log('Slider-Wert geändert:', value);
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
    label: { text: 'Include Uppercase Letters', location: 'after', },
    id: 'chk-upper',
    name: 'allow-uppercase',
  };
  allowLowercase: InputCheckboxInterface = {
    label: { text: 'Include Lowercase Letters', location: 'after', },
    id: 'chk-lower',
    name: 'allow-lowercase',
  };
  allowNumbers: InputCheckboxInterface = {
    label: { text: 'Include Numbers', location: 'after', },
    id: 'chk-numbers',
    name: 'allow-numbers',
  };
  allowSymbols: InputCheckboxInterface = {
    label: { text: 'Include Symbols', location: 'after', },
    id: 'chk-symbols',
    name: 'allow-symbols',
  };

  // used for the @for rendering in the HTML
  checkboxes = [this.allowUppercase, this.allowLowercase, this.allowNumbers, this.allowSymbols];

  // Signal Creation for the four checkboxes
  allowUppercaseSelection = signal(false);
  allowLowercaseSelection = signal(false);
  allowNumberSelection = signal(false);
  allowSymbolSelection = signal(false);

  getCheckedState(name: string): Signal<boolean> {
    return (
      {
        'allow-uppercase': this.allowUppercaseSelection,
        'allow-lowercase': this.allowLowercaseSelection,
        'allow-numbers': this.allowNumberSelection,
        'allow-symbols': this.allowSymbolSelection,
      }[name] ?? signal(false)
    );
  }

  toggleCheckbox(checked: boolean, name: string) {
    const state = this.getCheckedState(name) as WritableSignal<boolean>;
    state.set(checked);

    const currentState = {
      uppercase: this.allowUppercaseSelection(),
      lowercase: this.allowLowercaseSelection(),
      numbers: this.allowNumberSelection(),
      symbols: this.allowSymbolSelection(),
    };

    this.checkboxChange.emit(currentState);
  }
}
