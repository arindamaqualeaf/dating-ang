import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSolemateComponent } from './find-solemate.component';

describe('FindSolemateComponent', () => {
  let component: FindSolemateComponent;
  let fixture: ComponentFixture<FindSolemateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSolemateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSolemateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
