import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-inventory',
  imports: [FormsModule],
  templateUrl: './product-inventory.html',
  styleUrl: './product-inventory.css',
})
export class ProductInventory {
// Control properties
  showOutOfStock: boolean = true;
  showStatistics: boolean = false;
  selectedCategory: string = 'All';
  searchTerm: string = '';
  stockStatus: string = 'In Stock';

  // Categories array
  categories: string[] = ["All", "Laptops", "Phones", "Tablets", "Accessories"];

  // Products array
  products: any[] = [
    {id: 1, name: 'Dell XPS 15', category: 'Laptops', price: 45000, stock: 5, inStock: true},
    {id: 2, name: 'MacBook Pro M3', category: 'Laptops', price: 85000, stock: 0, inStock: false},
    {id: 3, name: 'HP Pavilion', category: 'Laptops', price: 35000, stock: 8, inStock: true},
    {id: 4, name: 'iPhone 15 Pro', category: 'Phones', price: 65000, stock: 12, inStock: true},
    {id: 5, name: 'Samsung Galaxy S24', category: 'Phones', price: 55000, stock: 0, inStock: false},
    {id: 6, name: 'iPad Air', category: 'Tablets', price: 38000, stock: 6, inStock: true},
    {id: 7, name: 'Samsung Tab S9', category: 'Tablets', price: 42000, stock: 3, inStock: true},
    {id: 8, name: 'Wireless Mouse', category: 'Accessories', price: 850, stock: 25, inStock: true},
    {id: 9, name: 'USB-C Hub', category: 'Accessories', price: 1200, stock: 0, inStock: false},
    {id: 10, name: 'Laptop Stand', category: 'Accessories', price: 1500, stock: 15, inStock: true}
  ];

  // Toggle methods
  toggleOutOfStock() {
    this.showOutOfStock = !this.showOutOfStock;
  }

  toggleStatistics() {
    this.showStatistics = !this.showStatistics;
  }

  // Category selection
  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  // Update stock status
  updateStockStatus(product: any) {
    product.inStock = !product.inStock;
    if (product.inStock) {
      product.stock = product.stock === 0 ? 1 : product.stock;
    } else {
      product.stock = 0;
    }
  }

  // Filter method for display
  shouldDisplayProduct(product: any): boolean {
    // Check out of stock visibility
    if (!this.showOutOfStock && !product.inStock) {
      return false;
    }

    // Check category filter
    if (this.selectedCategory !== 'All' && product.category !== this.selectedCategory) {
      return false;
    }

    // Check search term
    if (this.searchTerm && !product.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
      return false;
    }

    return true;
  }

  // Statistics calculations
  getTotalProducts(): number {
    return this.products.length;
  }

  getInStockCount(): number {
    return this.products.filter(p => p.inStock).length;
  }

  getOutOfStockCount(): number {
    return this.products.filter(p => !p.inStock).length;
  }

  getTotalValue(): number {
    return this.products.reduce((total, product) => {
      return total + (product.price * product.stock);
    }, 0);
  }
}
