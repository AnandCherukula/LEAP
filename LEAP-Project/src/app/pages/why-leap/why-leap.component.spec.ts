import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyLeapComponent } from './why-leap.component';

describe('WhyLeapComponent', () => {
  let component: WhyLeapComponent;
  let fixture: ComponentFixture<WhyLeapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyLeapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyLeapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
