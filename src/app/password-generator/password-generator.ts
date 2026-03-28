import { Component, signal } from '@angular/core';
import { GeneratorForm } from '../generator-form/generator-form';

@Component({
  selector: 'app-password-generator',
  imports: [GeneratorForm],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.scss',
  standalone: true,
})
export class PasswordGenerator {
  passwordLength = signal(12);
  checkboxes = signal({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  generatedPassword = signal('');
  passwordRating = signal<'TOO WEAK!' | 'WEAK' | 'MEDIUM' | 'STRONG' | '' >('');

  onPasswordLengthChange(value: number): void {
    this.passwordLength.set(value);
  }

  onCheckboxChange(value: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }): void {
    this.checkboxes.set(value);
  }

  onGenerate(): void {
    const copiedText = document.getElementById('copied') as HTMLSpanElement;
    copiedText.classList.remove('visible');
    copiedText.classList.add('hide');
    const password = this.generatePassword(
      this.passwordLength(),
      this.checkboxes().uppercase,
      this.checkboxes().lowercase,
      this.checkboxes().numbers,
      this.checkboxes().symbols,
    );

    this.generatedPassword.set(password);
    this.passwordRating.set(this.passwordQuality(this.calculateStrength(password)));
  }

  generatePassword(
    length: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
  ): string {
    let generatedPassword = '';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-[]';

    let allowedChars = '';

    if (uppercase) allowedChars += upperChars;
    if (lowercase) allowedChars += lowerChars;
    if (numbers) allowedChars += numberChars;
    if (symbols) allowedChars += symbolChars;

    if (!allowedChars) {
         return '';
    }

    for (let i = 0; i < length; i++) {
      const characterIndex = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars.charAt(characterIndex);
    }
    return generatedPassword;
  }

  calculateStrength(password: string): number {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-[]';

    let score = 0;

    if (password.length > 8) score += 10;
    if (password.length >= 12) score += 10;

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    for (const char of password) {
      if (upperChars.includes(char)) hasUpper = true;
      if (lowerChars.includes(char)) hasLower = true;
      if (numberChars.includes(char)) hasNumber = true;
      if (symbolChars.includes(char)) hasSymbol = true;
    }

    if (hasUpper) score += 10;
    if (hasLower) score += 10;
    if (hasNumber) score += 10;
    if (hasSymbol) score += 10;

    return score;
  }

  passwordQuality(score: number): 'TOO WEAK!' | 'WEAK' | 'MEDIUM' | 'STRONG' {
    if (score < 20) return 'TOO WEAK!';
    if (score < 40) return 'WEAK';
    if (score < 60) return 'MEDIUM';

    return 'STRONG';
  }

  copyToClipboard(): void {
    const copiedText = document.getElementById('copied') as HTMLSpanElement;
    const copyText = document.getElementById('password-output') as HTMLInputElement;

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard
      .writeText(copyText.value)
      .then(() => copiedText.classList.remove('hide'))
      .then(() => copiedText.classList.add('visible'));
  }

}
