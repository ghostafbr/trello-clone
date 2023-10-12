import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  products: Product[] = [];
  columns: string[] = ['#No', 'Name', 'price', 'cover'];
  total: number = 0;

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        this.products = data;
        this.total = this.products.map(t => t.price).reduce((acc, value) => acc + value, 0);
      })
  }

}
