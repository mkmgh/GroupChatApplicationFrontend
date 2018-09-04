import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupJoinComponent } from './chat-group-join.component';

describe('ChatGroupJoinComponent', () => {
  let component: ChatGroupJoinComponent;
  let fixture: ComponentFixture<ChatGroupJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
