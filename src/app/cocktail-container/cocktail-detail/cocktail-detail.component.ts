import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { PanierService } from '../../shared/services/panier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss'],
})
export class CocktailDetailComponent implements OnInit {
  public cocktail?: Cocktail;
  constructor(
    private PanierService: PanierService,
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index');
      if(cocktailIndex !== null) {
        this.cocktail = this.cocktailService.getById(+cocktailIndex);
      }
    });
  }
  public addToPanier() {
    this.PanierService.addToPanier(this.cocktail.ingredients);
  }
}
