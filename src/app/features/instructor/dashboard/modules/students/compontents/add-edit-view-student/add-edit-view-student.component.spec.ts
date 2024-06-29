import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewStudentComponent } from './add-edit-view-student.component';

describe('AddEditViewStudentComponent', () => {
  let component: AddEditViewStudentComponent;
  let fixture: ComponentFixture<AddEditViewStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditViewStudentComponent]
    });
    fixture = TestBed.createComponent(AddEditViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
