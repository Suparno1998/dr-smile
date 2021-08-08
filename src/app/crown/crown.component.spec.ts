import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownComponent } from './crown.component';

describe('CrownComponent', () => {
  let component: CrownComponent;
  let fixture: ComponentFixture<CrownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
