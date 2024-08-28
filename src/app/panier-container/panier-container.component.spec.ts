import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierContainerComponent } from './panier-container.component';

describe('PanierContainerComponent', () => {
  let component: PanierContainerComponent;
  let fixture: ComponentFixture<PanierContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanierContainerComponent]
    });
    fixture = TestBed.createComponent(PanierContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
