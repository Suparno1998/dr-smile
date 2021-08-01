import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluorideComponent } from './fluoride.component';

describe('FluorideComponent', () => {
  let component: FluorideComponent;
  let fixture: ComponentFixture<FluorideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluorideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluorideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
