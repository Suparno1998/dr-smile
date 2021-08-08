import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeadoComponent } from './peado.component';

describe('PeadoComponent', () => {
  let component: PeadoComponent;
  let fixture: ComponentFixture<PeadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
