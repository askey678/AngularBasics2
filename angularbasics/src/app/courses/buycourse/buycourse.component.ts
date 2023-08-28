import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-buycourse',
  templateUrl: './buycourse.component.html',
  styleUrls: ['./buycourse.component.css']
})
export class BuycourseComponent {
  constructor(private service: CourseService, private route: ActivatedRoute) { }

  course: any;
  courseId: any;

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    //this.courseId = this.route.snapshot.params['name'];
    this.course = this.service.courses.find(x => x.id == this.courseId);
  }
}
