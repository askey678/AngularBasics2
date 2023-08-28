import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { NewcoursesComponent } from './newcourses/newcourses.component';
import { NewcoursesdetailsComponent } from './newcoursesdetails/newcoursesdetails.component';
import { SetBackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { HostbinddirectiveDirective } from './CustomDirective/hostbinddirective.directive';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { VideohighlightDirective } from './CustomDirective/videohighlight.directive';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { MyLogService } from './Services/mylog.service';
import { CoursedetailmodalComponent } from './coursedetailmodal/coursedetailmodal.component';
import { CourseService } from './Services/course.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BuyCourse } from './Services/buycourse.service';
import { ErrorComponent } from './error/error.component';
import { ApphelpComponent } from './apphelp/apphelp.component';
import { DetailsPopUpComponent } from './details-pop-up/details-pop-up.component';
import { BuycourseComponent } from './courses/buycourse/buycourse.component';


const appRoute: Routes = [

  { path: '', component: HomeComponent },
  // or

  // given path Home is only declared in this file just below this line

  // {path:'', redirectTo: 'Home', pathMatch:'full'}, 
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Contact/Help', component: ApphelpComponent },
  { path: 'Courses/Buycourse/:id', component: BuycourseComponent },
  { path: '**', component: ErrorComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent,
    NewcoursesComponent,
    NewcoursesdetailsComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    HostbinddirectiveDirective,
    FeedbacksComponent,
    VideohighlightDirective,
    AddcourseComponent,
    CoursedetailmodalComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    ApphelpComponent,
    DetailsPopUpComponent,
    BuycourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [MyLogService, CourseService, BuyCourse],
  bootstrap: [AppComponent]
})
export class AppModule { }
