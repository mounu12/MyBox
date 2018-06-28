import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalmanagementsystemComponent } from './terminalmanagementsystem.component';

describe('TerminalmanagementsystemComponent', () => {
  let component: TerminalmanagementsystemComponent;
  let fixture: ComponentFixture<TerminalmanagementsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalmanagementsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalmanagementsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
