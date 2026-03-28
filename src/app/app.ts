import { Component, signal } from '@angular/core';
import { PasswordGenerator } from './password-generator/password-generator';
import { KiroFooter } from './kiro-footer/kiro-footer';

@Component({
  selector: 'app-root',
  imports: [ PasswordGenerator, KiroFooter ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('password-generator-app-angular');
}
