import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailsPopUpComponent } from '../details-pop-up/details-pop-up.component';

@Component({
  selector: 'app-coursedetailmodal',
  templateUrl: './coursedetailmodal.component.html',
  styleUrls: ['./coursedetailmodal.component.css']
})
export class CoursedetailmodalComponent implements OnInit {

  constructor(private courseservice: CourseService, private dialog: MatDialog) {

  }

  showModal = false;

  course?: { id: number, name: string, author: string, duration: number, type: string, price: number, ratings: number, image: string, description: string };
  ngOnInit(): void {
    this.courseservice.onShowDetailsClicked.subscribe((data: { id: number, name: string, author: string, duration: number, type: string, price: number, ratings: number, image: string, description: string }) => {
      const dialogconfig = new MatDialogConfig();
      console.log('event occured and we subsribed it@@')
      console.log('calling pop from coursedetailmodel!!')
      dialogconfig.data = data;
      dialogconfig.position = { top: '-220%',left: '10%' }
      this.dialog.open(DetailsPopUpComponent, dialogconfig);

    })
  }

}
