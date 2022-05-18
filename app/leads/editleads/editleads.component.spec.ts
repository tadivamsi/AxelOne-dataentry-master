import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditleadsComponent } from './editleads.component';

describe('EditleadsComponent', () => {
  let component: EditleadsComponent;
  let fixture: ComponentFixture<EditleadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditleadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
