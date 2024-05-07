import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkFilterComponent } from './artwork-filter.component';

describe('ArtworkFilterComponent', () => {
  let component: ArtworkFilterComponent;
  let fixture: ComponentFixture<ArtworkFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworkFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtworkFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
