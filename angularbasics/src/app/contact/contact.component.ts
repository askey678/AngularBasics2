import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private router: Router, private activatedroute: ActivatedRoute) {

  }

  ProcessForm() {
    //Write logic to process the form

  }

  navigateToHelp() {
    this.router.navigate(['Help'], { relativeTo: this.activatedroute });

    // now the url becomes localhost:4200/Contact?Help and now the angular will hunt for route with path Contact/Help in the route file and if not found any will display the WildCard

  }

}
