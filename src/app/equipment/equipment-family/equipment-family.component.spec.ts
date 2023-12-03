import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentFamilyComponent } from './equipment-family.component';

describe('EquipmentFamilyComponent', () => {
  let component: EquipmentFamilyComponent;
  let fixture: ComponentFixture<EquipmentFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
