import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { TestComponent } from './modules/test/test.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { SignupPageComponent } from './modules/signup-page/signup-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebReqInterceptor } from './web-req-interceptor';
import { NewpostsComponent } from './modules/newposts/newposts.component';
import { GetpostsComponent } from './modules/getposts/getposts.component';
import { Getposts2Component } from './modules/getposts2/getposts2.component';
import { Getposts3Component } from './modules/getposts3/getposts3.component';
import { NewListComponent } from './modules/new-list/new-list.component';
import { NewTaskComponent } from './modules/new-task/new-task.component';
import { TaskViewComponent } from './modules/task-view/task-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginPageComponent,
    SignupPageComponent,
    NewpostsComponent,
    GetpostsComponent,
    Getposts2Component,
    Getposts3Component,
    NewListComponent,
    NewTaskComponent,
    TaskViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
