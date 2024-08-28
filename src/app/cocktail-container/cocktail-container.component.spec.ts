import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailContainerComponent } from './cocktail-container.component';

describe('CocktailContainerComponent', () => {
  let component: CocktailContainerComponent;
  let fixture: ComponentFixture<CocktailContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailContainerComponent]
    });
    fixture = TestBed.createComponent(CocktailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
