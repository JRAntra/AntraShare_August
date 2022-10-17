import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDialogueComponent } from './list-dialogue.component';

describe('ListDialogueComponent', () => {
  let component: ListDialogueComponent;
  let fixture: ComponentFixture<ListDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
