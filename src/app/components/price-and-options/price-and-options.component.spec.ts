import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAndOptionsComponent } from './price-and-options.component';

describe('PriceAndOptionsComponent', () => {
  let component: PriceAndOptionsComponent;
  let fixture: ComponentFixture<PriceAndOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceAndOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceAndOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
