import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErisionComponent } from './erision.component';

describe('ErisionComponent', () => {
  let component: ErisionComponent;
  let fixture: ComponentFixture<ErisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
