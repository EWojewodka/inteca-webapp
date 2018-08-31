import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  getState(outlet) {
    console.log(outlet);
    return outlet.activatedRouteData.state;
  }
}
