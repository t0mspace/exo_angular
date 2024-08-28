import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailComponent } from './cocktail-container/cocktail-detail/cocktail-detail.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { Routes } from '@angular/router';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  {
    path: 'cocktails',
    component: CocktailContainerComponent,
    children: [
      { path: 'new', component: CocktailFormComponent },
      { path: ':index/edit', component: CocktailFormComponent },
      { path: ':index', component: CocktailDetailComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
  { path: 'panier', component: PanierContainerComponent },
];
