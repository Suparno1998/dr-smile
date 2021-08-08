import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenturesComponent } from './dentures.component';

describe('DenturesComponent', () => {
  let component: DenturesComponent;
  let fixture: ComponentFixture<DenturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
