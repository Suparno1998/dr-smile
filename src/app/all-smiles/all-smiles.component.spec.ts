import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSmilesComponent } from './all-smiles.component';

describe('AllSmilesComponent', () => {
  let component: AllSmilesComponent;
  let fixture: ComponentFixture<AllSmilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSmilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSmilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
