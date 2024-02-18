// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
