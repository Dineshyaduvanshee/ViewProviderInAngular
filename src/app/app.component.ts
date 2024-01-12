import { Component, ViewEncapsulation } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'ViewProviderInAngular';
  constructor(private emp : Employee){
    emp.show();
  }
}
