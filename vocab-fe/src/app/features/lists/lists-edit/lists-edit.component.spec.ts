import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsEditComponent } from './lists-edit.component';

describe('ListsEditComponent', () => {
  let component: ListsEditComponent;
  let fixture: ComponentFixture<ListsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
