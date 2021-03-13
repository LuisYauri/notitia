import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuCiudadanoComponent } from './header-menu-ciudadano.component';

describe('HeaderMenuCiudadanoComponent', () => {
  let component: HeaderMenuCiudadanoComponent;
  let fixture: ComponentFixture<HeaderMenuCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuCiudadanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
