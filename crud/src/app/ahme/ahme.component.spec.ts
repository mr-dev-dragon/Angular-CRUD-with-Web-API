import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmeComponent } from './ahme.component';

describe('AhmeComponent', () => {
  let component: AhmeComponent;
  let fixture: ComponentFixture<AhmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
