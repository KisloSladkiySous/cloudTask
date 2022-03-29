import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlEditorComponent } from './url-editor.component';

describe('UrlEditorComponent', () => {
  let component: UrlEditorComponent;
  let fixture: ComponentFixture<UrlEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
