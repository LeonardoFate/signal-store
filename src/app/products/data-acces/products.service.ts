
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable()

export class productService {

    private http = inject(HttpClient)

    getProducts() {
        return this.http.get('https://fakestoreapi.com/products')
    }
}
