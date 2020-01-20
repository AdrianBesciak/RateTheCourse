import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsCockpitComponent } from './admins-cockpit.component';

describe('AdminsCockpitComponent', () => {
  let component: AdminsCockpitComponent;
  let fixture: ComponentFixture<AdminsCockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsCockpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
