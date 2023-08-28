import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { BuyCourse } from '../Services/buycourse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private coursesService: CourseService, private buyService: BuyCourse) { }

  courses: { id: number, name: string, author: string, duration: number, type: string, price: number, ratings: number, image: string, description: string }[] = [];


  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }


  onShowDetailsClick(course: { id: number, name: string, author: string, duration: number, type: string, price: number, ratings: number, image: string, description: string }) {
    this.coursesService.ShowCourseDetails(course);
  }

}
