import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuAdminComponent } from './header-menu-admin.component';

describe('HeaderMenuAdminComponent', () => {
  let component: HeaderMenuAdminComponent;
  let fixture: ComponentFixture<HeaderMenuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
