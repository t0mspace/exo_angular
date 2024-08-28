import { Ingredient } from './ingredient.interface';

export interface Cocktail {
  name: string | null;
  image: string | null;
  description: string | null;
  ingredients: Ingredient[] | null;
}
