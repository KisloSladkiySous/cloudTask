import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuiComponent } from './hui.component';

describe('HuiComponent', () => {
  let component: HuiComponent;
  let fixture: ComponentFixture<HuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
