import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedDetailsComponent } from './packed-details.component';

describe('PackedDetailsComponent', () => {
  let component: PackedDetailsComponent;
  let fixture: ComponentFixture<PackedDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackedDetailsComponent]
    });
    fixture = TestBed.createComponent(PackedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
