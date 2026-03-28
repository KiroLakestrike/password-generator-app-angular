import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiroFooter } from './kiro-footer';

describe('KiroFooter', () => {
  let component: KiroFooter;
  let fixture: ComponentFixture<KiroFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KiroFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(KiroFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
