import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RctComponent } from './rct.component';

describe('RctComponent', () => {
  let component: RctComponent;
  let fixture: ComponentFixture<RctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
