import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsDetailsComponent } from './lists-details.component';

describe('ListsDetailsComponent', () => {
  let component: ListsDetailsComponent;
  let fixture: ComponentFixture<ListsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
