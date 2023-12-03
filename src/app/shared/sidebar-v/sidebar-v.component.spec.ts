import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarVComponent } from './sidebar-v.component';

describe('SidebarVComponent', () => {
  let component: SidebarVComponent;
  let fixture: ComponentFixture<SidebarVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
