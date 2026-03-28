import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { RangeSlider } from "../range-slider/range-slider";
import { InputCheckbox } from '../input-checkbox/input-checkbox';
import { InputCheckboxInterface } from '../input-checkbox/input-checkbox.interface'


@Component({
  selector: 'app-generator-form',
  imports: [RangeSlider, InputCheckbox],
  templateUrl: './generator-form.html',
  styleUrl: './generator-form.scss',
})
export class GeneratorForm {

  trackByCheckboxId(index: number, checkbox: InputCheckboxInterface): string {
  return checkbox.id;
}

  allowUppercase: InputCheckboxInterface = {
    label:{
      text: 'Include Uppercase Letters',
      location: 'after',
    },
    id: 'chk-upper',
    name: 'allow-uppercase',
  }
    allowLowercase: InputCheckboxInterface = {
    label:{
      text: 'Include Lowercase Letters',
      location: 'after',
    },
    id: 'chk-lower',
    name: 'allow-lowercase',
  }
    allownumbers: InputCheckboxInterface = {
    label:{
      text: 'Include Numbers',
      location: 'after',
    },
    id: 'chk-numbers',
    name: 'allow-numbers',
  }
    allowSymbols: InputCheckboxInterface = {
    label:{
      text: 'Include Symbols',
      location: 'after',
    },
    id: 'chk-symbols',
    name: 'allow-symbols',
  }

  checkboxes = [this.allowUppercase, this.allowLowercase, this.allownumbers, this.allowSymbols] 
  

  allowUppercaseSelection = signal(false);
  allowLowercaseSelection = signal(false);
  allowNumberSelection = signal(false);
  allowSymbolSelection = signal(false);

  getCheckedState(name:string): Signal<boolean> {
    return {
      'allowUppercaseSelection': this.allowUppercaseSelection,
      'allowLowercaseSelection': this.allowLowercaseSelection,
      'allowNumberSelection': this.allowNumberSelection,
      'allowSymbolSelection': this.allowSymbolSelection
    }[name] ?? signal(false);
  }

  toggleCheckbox(event: Event, name:string) {
    const target = event.target as HTMLInputElement;
    const state = this.getCheckedState(name) as WritableSignal<boolean>;
    state.set(target.checked);
    const status = target.checked ? 'checked' : 'unchecked';
    console.log(`${name} changed to ${status}`);
  }
}
