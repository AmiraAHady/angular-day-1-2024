import { Component } from '@angular/core';
import { ProductDescriptionComponent } from '../product-description/product-description.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductDescriptionComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
   productName:string='IPhone'
   price:number=1000
   imagePath:string='https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg'
   is_avaliable:boolean=true


   pushToCart(){
     console.log('item pushed to cart!');
     
   }
   printData(ev:KeyboardEvent){
     console.log(ev.key);
    //  console.log(key press);
     
   }
  
}
