import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food, foodDto } from '../shared/models/Food';
import { Restaurant } from '../shared/models/Restaurant';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  foods : Food[] =[]
  foodsDto: foodDto[] = [];
 

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getplates().subscribe((data: Food[]) => {
      console.log(data);
      
      this.foods = data;
      
      console.log(this.foods);

      this.foodsDto = this.inintFoodDto(this.foods );
      
      console.log(this.foodsDto);
    
    });
  }
 
  inintFoodDto(foods: Food[]):foodDto[] {
    
    let tempFoodDto: foodDto[] = [];
   

    foods.forEach((food) => {
  
      const foDto: foodDto = {
        name: food.name,
        price: food.price,
        photo: this.getPhoto(food.photo),
        restaurant: this.getRestaurant(food.restaurant?.name),
        idrestaurant:food.idrestaurant,
        favorite:food.favorite,
        stars: food.stars,
        cookTime:food.cookTime,
        origin: food.origin,
      }; 
      tempFoodDto.push(foDto);
     
    });
  
    
    return  tempFoodDto;
   
  }
     
  private getPhoto(data: string): any {
    return 'data:image/jpg;base64,' + data;
  }

  

  
  private getRestaurant(data:any): any {
    console.log("data in getRestaurant----------" + data);
    return data;
  }




      
    
  }
   



