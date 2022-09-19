import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloginPageComponent } from './afterlogin-page.component';

describe('AfterloginPageComponent', () => {
  let component: AfterloginPageComponent;
  let fixture: ComponentFixture<AfterloginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterloginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterloginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
