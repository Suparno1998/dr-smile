import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmoComponent } from './cosmo.component';

describe('CosmoComponent', () => {
  let component: CosmoComponent;
  let fixture: ComponentFixture<CosmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
