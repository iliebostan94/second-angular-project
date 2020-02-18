import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayPoolComponent } from './play-pool.component';

describe('PlayPoolComponent', () => {
  let component: PlayPoolComponent;
  let fixture: ComponentFixture<PlayPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
