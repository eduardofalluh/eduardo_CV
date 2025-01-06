import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDCarouselComponent } from './three-d-carousel.component';

describe('ThreeDCarouselComponent', () => {
  let component: ThreeDCarouselComponent;
  let fixture: ComponentFixture<ThreeDCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
