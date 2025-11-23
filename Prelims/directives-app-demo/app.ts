import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Directives } from './directives/directives';
import { ProductInventory } from './product-inventory/product-inventory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Directives, ProductInventory],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-app-demo');
}
