import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAndIngredientsComponent } from './description-and-ingredients.component';

describe('ImageAndIngredientsComponent', () => {
  let component: ImageAndIngredientsComponent;
  let fixture: ComponentFixture<ImageAndIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAndIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAndIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
