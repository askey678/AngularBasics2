import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
   
    constructor(private router: Router){}

  GoToHome(){
    this.router.navigate(['Home']);  // using navigate method
      //or
    // this.router.navigateByUrl('Home');  // using navigate url method  

    //localhost:port/Home
  }

}
