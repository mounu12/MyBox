import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelmanagementComponent } from './modelmanagement.component';

describe('ModelmanagementComponent', () => {
  let component: ModelmanagementComponent;
  let fixture: ComponentFixture<ModelmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
