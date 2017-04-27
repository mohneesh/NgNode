import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirlasoftComponent } from './birlasoft.component';

describe('BirlasoftComponent', () => {
  let component: BirlasoftComponent;
  let fixture: ComponentFixture<BirlasoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirlasoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirlasoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
