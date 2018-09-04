import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChatGroupDetailsComponent } from './edit-chat-group-details.component';

describe('EditChatGroupDetailsComponent', () => {
  let component: EditChatGroupDetailsComponent;
  let fixture: ComponentFixture<EditChatGroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChatGroupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChatGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
