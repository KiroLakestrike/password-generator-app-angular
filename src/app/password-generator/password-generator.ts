import { Component } from '@angular/core';
import { GeneratorForm } from "../generator-form/generator-form";

@Component({
  selector: 'app-password-generator',
  imports: [GeneratorForm],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.scss',
})
export class PasswordGenerator {}
