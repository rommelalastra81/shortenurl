import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenurlComponent } from './shortenurl.component';

describe('ShortenurlComponent', () => {
  let component: ShortenurlComponent;
  let fixture: ComponentFixture<ShortenurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
