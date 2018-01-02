import { Component } from '@angular/core';
import { Hero } from './hero';
/*模拟英雄的数据*/
const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li [class.selected]="hero === selectedHero"
        *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <!-- each hero goes here -->
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <h1>{{title}}</h1>

  `/*
  在未执行click事件前，hero对象还未传到select方法中
  ，selectedHero属性还没有获取到hero对象，因此需要隐藏
  selectedHero为空的英雄详情，当点击完成后，hero对象传入，
  selectedHero就能获取到hero对象保存的字面量对象中的属性值了
  */
})
/*添加属性,title属性用来表示应用的名字，hero属性用来表示叫做windstorm的英雄*/
export class AppComponent {
  title = 'Tour of Heroes';
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  heroes = HEROES; /*创建的公共属性,暴露英雄以供绑定*/
  selectedHero: Hero; /*定义详情中的属性对象*/
  onSelect(hero: Hero): void { /*click绑定的函数，执行时把对象传入赋值*/
    this.selectedHero = hero;
  }
}
