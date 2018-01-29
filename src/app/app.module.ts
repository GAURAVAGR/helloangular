import { CourseService } from './courses.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { WebComponent } from './web/web.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    WebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseService // Registering a depency as a provider in app module,  For all the components where it is used, a single instance will be made and returned by angular. Singleton// It is provided here bcoz this CourseService is used in CourseComponent constructor (dependency). 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
