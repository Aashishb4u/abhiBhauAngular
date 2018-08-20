import { Component } from '@angular/core';
import {DemoService} from './services/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private demoService: DemoService) { }

  public restaurantData;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.demoService.getData().subscribe(
      data => this.success(data),
         err => this.error(err),
       );
    }

  success(data) {
    console.log(data);
    this.restaurantData = data;
  }

  error(error) {
    console.log(error);
  }
}
