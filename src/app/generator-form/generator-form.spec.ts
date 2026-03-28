import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorForm } from './generator-form';

describe('GeneratorForm', () => {
  let component: GeneratorForm;
  let fixture: ComponentFixture<GeneratorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratorForm],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
