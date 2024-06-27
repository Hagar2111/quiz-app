import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewGroupComponent } from './add-edit-view-group.component';

describe('AddEditViewGroupComponent', () => {
  let component: AddEditViewGroupComponent;
  let fixture: ComponentFixture<AddEditViewGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditViewGroupComponent]
    });
    fixture = TestBed.createComponent(AddEditViewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
