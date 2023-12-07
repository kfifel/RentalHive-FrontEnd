import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEquipmentListComponent } from './order-equipment-list.component';

describe('OrderEquipmentListComponent', () => {
  let component: OrderEquipmentListComponent;
  let fixture: ComponentFixture<OrderEquipmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEquipmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderEquipmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
