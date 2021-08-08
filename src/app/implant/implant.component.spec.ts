import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantComponent } from './implant.component';

describe('ImplantComponent', () => {
  let component: ImplantComponent;
  let fixture: ComponentFixture<ImplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
