import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myservice } from './myservice';
import { NewCmp } from './new-cmp/new-cmp';
import { Employee } from './employee';
import { Products } from './products';


import { Httpclient } from './httpclient';
import { User } from './user.model';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewCmp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];

   public products: {
    id: number,
    name: string,
    description: string,
    price: number,
  }[] = [];

  protected readonly title = signal('angular-services-demo');
  todaydate;
   httpusers: User[] = [];
  constructor(private myservice:Myservice, private _employeeService: Employee,  private _productsService: Products, private http: Httpclient){
    this.todaydate = this.myservice.showTodayDate()
  }


ngOnInit() {
    this.employees = this._employeeService.getEmployees();
     this.products = this._productsService.getProducts();
     this.http.getUsersRemotely().subscribe((data) => {this.httpusers = data; })
    }
  }

