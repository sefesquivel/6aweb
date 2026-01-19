import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getProducts() {
    return [
      {
        id: 101,
        name: 'Logitech Mouse',
        description: '6-Button Mechanical Mouse',
        price: 899.00,
      },
      {
        id: 102,
        name: 'JBL Bluetooth Speaker',
        description: 'Waterproof Radio 360 Surround Sound',
        price: 1099.00,
      },
      {
        id: 103,
        name: 'Mechanical Keyboard',
        description: 'Hot-Swappable RBG Backlit',
        price: 2395.00,
      },
      {
        id: 104,
        name: 'Oculus Meta',
        description: 'All-In-One Gaming Headset',
        price: 22450.00,
      },
    ];
  }
}
