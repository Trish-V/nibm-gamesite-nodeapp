import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeToPlayComponent } from './free-to-play.component';

describe('FreeToPlayComponent', () => {
  let component: FreeToPlayComponent;
  let fixture: ComponentFixture<FreeToPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeToPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeToPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
