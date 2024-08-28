import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss'],
})
export class CocktailFormComponent implements OnInit {
  public cocktail?: Cocktail;
  public cocktailForm: FormGroup = this.initForm();

  constructor(
    public formBuilder: FormBuilder,
    private cocktailService: CocktailService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null) {
        this.cocktail = this.cocktailService.getById(parseInt(index));
        this.cocktailForm = this.initForm(this.cocktail);
      }
    });
  }

  private initForm(
    cocktail: Cocktail = {
      name: '',
      description: '',
      image: '',
      ingredients: [],
    }
  ): FormGroup {
    return this.formBuilder.group({
      name: [cocktail.name, Validators.required],
      image: [cocktail.image, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.formBuilder.array(
        cocktail.ingredients.map((ingredient) =>
          this.formBuilder.group({
            name: [ingredient.name, Validators.required],
            quantity: [ingredient.quantity, Validators.required],
          })
        ),
        Validators.required
      ),
    });
  }

  public addIngredient() {
    this.ingredients.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
      })
    );
  }

  public submit(): void {
    if(this.cocktail)
    {
      this.cocktailService.editCocktail(this.cocktailForm.value);
    }else{
      this.cocktailService.addCocktail(this.cocktailForm.value);
      
    }

    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
