import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweUserComponent } from './viwe-user.component';

describe('ViweUserComponent', () => {
  let component: ViweUserComponent;
  let fixture: ComponentFixture<ViweUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViweUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViweUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
