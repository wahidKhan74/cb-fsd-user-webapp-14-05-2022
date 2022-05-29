import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  fetching: boolean = false;
  products: any[] = [];
  cartProducts: any[] = [];
  whishlistProducts: any[] = [];

  constructor( public db: DataService) { }

  ngOnInit(): void {
    this.db.getProducts();
    this.db.productsSub.subscribe(res => {
      if(res.length !== 0) {
        this.products = Object.assign([], res);
        this.fetching = false;
        console.log(this.products);        
      }
    })
    
  }

}
