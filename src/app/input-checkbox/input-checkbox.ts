import { Component, signal, Input, Output, EventEmitter } from '@angular/core';
import { InputCheckboxInterface  } from './input-checkbox.interface';
@Component({
  selector: 'app-input-checkbox',
  imports: [],
  templateUrl: './input-checkbox.html',
  styleUrl: './input-checkbox.scss',
})
export class InputCheckbox {

    @Input() config!: InputCheckboxInterface;
    @Input() checked = false;
    @Output() change = new EventEmitter<Event>();

}
