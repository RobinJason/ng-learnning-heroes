import { Component, Input } from '@angular/core';
import { Hero } from './hero';

/*英雄详情视图*/
@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero; /*在hero前面加上Input装饰器，表明它是一个输入属性，通过hero来接收一个英雄对象，然后把这个属性绑定到自己的模板中*/
}
