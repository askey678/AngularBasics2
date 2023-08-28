import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-details-pop-up',
  templateUrl: './details-pop-up.component.html',
  styleUrls: ['./details-pop-up.component.css']
})
export class DetailsPopUpComponent {

  constructor(private dialogRef: MatDialogRef<DetailsPopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public closeMe() {
    this.dialogRef.close();
  }
}
