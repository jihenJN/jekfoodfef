import { Restaurant } from "./Restaurant";


export class Food {

    name:string;
    price:number;
    photo:any;
    favorite:boolean;
    stars:number;
    origin:string;
    idrestaurant:string;
    cookTime:number;
    restaurant?: Pick<Restaurant,'name'> | null;
   
    
    constructor() {
      this.name= '';
      this.price= 0;
      this.photo= '';
      this.favorite=false;
      this.stars=0;
      this.origin='';
      this.idrestaurant='';
      this.cookTime=0;
      this.restaurant=null;
      
    }
  
  
  }
    
  export interface foodDto {

    name:string;
    price:number
    photo:any;
    favorite:boolean;
    stars:number;
    origin:string;
    idrestaurant: string;
    cookTime:number;
    restaurant?: Pick<Restaurant,'name'> | null;
   
  }
  