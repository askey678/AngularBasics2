import { Component, OnInit } from "@angular/core";
import { BuyCourse } from "../Services/buycourse.service";
import { CourseService } from "../Services/course.service";

@Component({
    selector: 'app-course',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css'],
})

export class CoursesComponent implements OnInit {

    constructor(private buyCourseService: BuyCourse, private courseService: CourseService) {

    }

    courses: { id: number, name: string, author: string, duration: number, type: string, price: number, ratings: number, image: string, description: string }[] = [];
    
    mastercourses: { id: number, name: string, author: string, duration: number, type: string, price: number, ratings: number, image: string, description: string }[] = [];
   
    ngOnInit(): void {
        this.courses = this.courseService.courses;
        this.mastercourses = this.courseService.courses;
        this.filterCourses();
    }

    getAllCourses() {
        return this.courseService.courses.length;
    }

    getFreeCourses() {
        return this.courseService.courses.filter(course => course.type === 'Free').length;
    }

    getPremiumCourses() {
        return this.courseService.courses.filter(course => course.type === 'Premium').length;
    }

    courseCountRadioButton: string = 'All';

    searchText: string = '';


    onFilterRadioButtonChange(data: string) {
        this.courseCountRadioButton = data;
        this.filterCourses();
        // console.log(this.courseCountRadioButton);
    }


    onSearchTextEntered(searchValue: string) {
        this.searchText = searchValue;
        this.filterCourses();
        // console.log(this.searchText);
    }


    // declaring method to call service method from buycourse.service class

    // OnClickBuy(titleName: string) {
    //     this.buyCourseService.OnBuyClicked(titleName);
    // }




    // ShowDetails(title: string, price: number, description: string, professor: string, duration: number) {
    //     this.buyCourseService.OnShowDetailsClicked(title, price, description, professor, duration);
    // }

    ShowDetails(course: { id: number, name: string, author: string, duration: number, type: string, price: number, ratings: number, image: string, description: string }) {
        console.log("in console of course component's showdetails method");
        this.courseService.ShowCourseDetails(course);
    }

    filterCourses() {
        let filteredCourses: any[] = this.mastercourses;
        if (this.courseCountRadioButton && this.courseCountRadioButton != "All") {
            filteredCourses = this.mastercourses.filter(_ => _.type == this.courseCountRadioButton);
        }
        if (this.searchText) {
            filteredCourses = filteredCourses.filter(_ => _.name.toLowerCase().includes(this.searchText));
        }
        this.courses = filteredCourses;
        console.log(this.mastercourses.length);
    }
}