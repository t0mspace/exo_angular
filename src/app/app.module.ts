import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule  } from '@angular/common/http';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './cocktail-container/cocktail-detail/cocktail-detail.component';
import { SelectedDirective } from './shared/directives/selected.directive';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';
import { APP_ROUTES } from './app.routes';
import { PanierService } from './shared/services/panier.service';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(APP_ROUTES), ReactiveFormsModule,CommonModule, HttpClientModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailComponent,
    CocktailContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
    CocktailFormComponent,
    FilterPipe,
  ],
  bootstrap: [AppComponent],
  providers: [PanierService],
})
export class AppModule {}
