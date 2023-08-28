import { EventEmitter, Injectable } from "@angular/core"
import { MyLogService } from "./mylog.service"

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private Logger: MyLogService) {

    }

    courses = [
        {
            id: 101, name: 'VueJs for beginners', author: 'John Heikela', duration: 48, type: 'Free',
            price: 49.00, ratings: 3.5, image: 'assets/courses/course-image-11.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }
        , {
            id: 110, name: 'React with J2EE', author: 'John Heikela', duration: 48, type: 'Premium',
            price: 199.00, ratings: 4.7, image: 'assets/courses/course-image-7.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }, {
            id: 106, name: 'Angular with .NET Core', author: 'John Heikela', duration: 48, type: 'Free',
            price: 149.00, ratings: 3.5, image: 'assets/courses/course-image-6.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }, {
            id: 103, name: 'Advance Angular Course', author: 'John Heikela', duration: 48, type: 'Premium',
            price: 99.00, ratings: 4.5, image: 'assets/courses/course-image-4.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }, {
            id: 104, name: 'React for beginners', author: 'John Heikela', duration: 48, type: 'Free',
            price: 149.00, ratings: 3.5, image: 'assets/courses/course-image-3.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }, {
            id: 105, name: 'Advance JavaScript Course', author: 'John Heikela', duration: 48, type: 'Premium',
            price: 129.00, ratings: 3.5, image: 'assets/courses/course-image-5.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }, {
            id: 107, name: 'React with .NET Core', author: 'John Heikela', duration: 48, type: 'Free',
            price: 199.00, ratings: 5.5, image: 'assets/courses/course-image-8.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }, {
            id: 108, name: 'Advance React Course', author: 'John Heikela', duration: 48, type: 'Premium',
            price: 99.00, ratings: 4.8, image: 'assets/courses/course-image-10.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }, {
            id: 109, name: 'JavaScript for beginners', author: 'John Heikela', duration: 48, type: 'Free',
            price: 99.00, ratings: 3.5, image: 'assets/courses/course-image-2.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }, {
            id: 102, name: 'Angular for beginners', author: 'John Heikela', duration: 48, type: 'Free',
            price: 49.00, ratings: 3.5, image: 'assets/courses/course-image-1.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }, {
            id: 111, name: 'Advance Java Course', author: 'John Heikela', duration: 48, type: 'Premium',
            price: 249.00, ratings: 4.9, image: 'assets/courses/course-image-9.jpg',
            description: 'In this course you will learn the fundamentals of JavaScripts. This course is purely designed for the beginners who have basic knowledge of javascript'
        }
    ]


    AddNewCourse(id: number, name: string, author: string, duration: number, type: string, price: number, ratings: number, image: string, description: string) {
        this.courses.push({ id: id, name: name, author: author, duration: duration, type: type, price: price, ratings: ratings, image: 'assets/courses/newcourse.jpg', description: description });
        const Logger = new MyLogService();
        Logger.LogMessage(name, price);
    }

    onShowDetailsClicked = new EventEmitter<{ id: number, name: string, author: string, duration: number, type: string, price: number, ratings: number, image: string, description: string }>;

    ShowCourseDetails(course: { id: number, name: string, author: string, duration: number, type: string, price: number, ratings: number, image: string, description: string }) {
        console.log("in course service method ShowCourseDetails, emitting data to event emitter property")
        this.onShowDetailsClicked.emit(course);
        console.log(this.onShowDetailsClicked);
        
    }
}