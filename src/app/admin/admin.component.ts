import { Component } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  viewProviders:[Employee]
})
// export class Abc{
//   constructor(){
//     console.log("Abc constructor called...");
//   }
//   display(name : string){
//     console.log("Abc constructor method display called...");
//     console.log("Hello"+name);
    
    
//   }
//   }
export class AdminComponent {
  constructor(private emp : Employee){
    emp.show();
    
  }

}
