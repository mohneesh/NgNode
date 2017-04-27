import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenpactComponent } from './genpact.component';

describe('GenpactComponent', () => {
  let component: GenpactComponent;
  let fixture: ComponentFixture<GenpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
