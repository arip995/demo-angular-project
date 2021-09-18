import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectComponent } from './behaviour-subject.component';

describe('BehaviourSubjectComponent', () => {
  let component: BehaviourSubjectComponent;
  let fixture: ComponentFixture<BehaviourSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviourSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
