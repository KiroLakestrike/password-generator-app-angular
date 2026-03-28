import { Component } from '@angular/core';
import { GeneratorForm } from "../generator-form/generator-form";

@Component({
  selector: 'app-password-generator',
  imports: [GeneratorForm],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.scss',
})
export class PasswordGenerator {
  // Wait for changing Event of the Password length and log in Console atm
  onPasswordLengthChange(value: number): void {
    console.log('Password-Length:', value);
  }

  // Wait for changing event of the Checkboxes and log in console atm
  onCheckboxChange(value: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }): void {
    console.log('Checkbox state:', value);
  }
}


