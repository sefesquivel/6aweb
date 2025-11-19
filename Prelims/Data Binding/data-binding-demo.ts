import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css'
})
export class DataBindingDemoComponent {
    title = "My First App!"
    description = "This is my new Angular Application"

    imageUrl = '../assets/logo-angular.png';
    w = 50;
    h = 50;
    altText = 'Angular Logo';

    textColor='blue';

    isHighlighted = true;

    yourName = '';


    count = 0;
    increment() {
      this.count++;
    }
    decrement() {
      this.count--;
    }
    

  }

