import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; /*<-- NgModel lives here*/

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [ /*declarations数组包含属于该模块的组件、管道和指令的列表。组件在被其他组件引用之前必须先在一个模块中声明过*/
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule /*<-- import the FormsModules before binding with [(ngModel)}*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
