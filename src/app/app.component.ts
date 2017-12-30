import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`
})
/*添加属性,title属性用来表示应用的名字，hero属性用来表示叫做windstorm的英雄*/
export class AppComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}
