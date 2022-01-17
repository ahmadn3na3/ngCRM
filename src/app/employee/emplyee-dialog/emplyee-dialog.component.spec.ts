import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeDialogComponent } from './emplyee-dialog.component';

describe('EmplyeeDialogComponent', () => {
  let component: EmplyeeDialogComponent;
  let fixture: ComponentFixture<EmplyeeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyeeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
