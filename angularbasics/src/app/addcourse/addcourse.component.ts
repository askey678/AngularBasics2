import { Component } from '@angular/core';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  constructor(private courseservice: CourseService) {

  }

  id: number = 1001;
  name: string = '';
  author: string = '';
  duration: number = 1001;
  type: string = '';
  price: number = 1001;
  ratings: number = 1001;
  image: string = '';
  description: string = '';

  AddCourse() {
    console.log("ihiii");
    this.courseservice.AddNewCourse(this.id, this.name, this.author, this.duration, this.type, this.price, this.ratings, this.image, this.description);
    console.log(this.courseservice.courses);
  }
}
