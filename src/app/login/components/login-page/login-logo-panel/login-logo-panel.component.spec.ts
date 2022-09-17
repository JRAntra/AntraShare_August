import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLogoPanelComponent } from './login-logo-panel.component';

describe('LoginLogoPanelComponent', () => {
  let component: LoginLogoPanelComponent;
  let fixture: ComponentFixture<LoginLogoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLogoPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLogoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
