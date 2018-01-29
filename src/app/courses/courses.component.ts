import { CourseService } from './../courses.services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
//   templateUrl: './courses.component.html',
//   template : '<button type="button" class="btn"  [class.active] ={{isActive}}>Basic</button>', 
//   template : `<button [style.backround.color]="isActive ? 'Blue' : 'Red' "> hello</button>`, 
  template : `
            <button (onclick)="onSave()"> Button </button>
          `//,
//styleUrls: ['./courses.component.css']
})
//<img src="{{ getUrl() }}" /> this is property binding | It is one way binding as changes in component will be ref;eted to DOM but not from DOM to component. 
export class CoursesComponent   {
  onSave(){
    console.log('Button clicked.');
  }

  isActive = false ;
  title: any = 'From function';
  courses = ["course1", "course2", "course3", "course4"];
  imageUrl = "https://www.adlabsimagica.com/wp-content/uploads/Wat-A-Wednesday_Homepage-banner_without-text.jpg";
  getTitile() {
    //  return this.title;
    return 'From function';
  }
  getUrl() {
    //  return this.title;
    return 'https://www.adlabsimagica.com/wp-content/uploads/Wat-A-Wednesday_Homepage-banner_without-text.jpg';
  }
  /*
    constructor() { 
      let service = new CourseService();
      this.courses = service.getCourses();
    }
  */
  constructor(service: CourseService) {
    this.courses = service.getCourses();
  } 

}
