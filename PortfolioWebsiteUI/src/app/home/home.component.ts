import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
    
    let load = sessionStorage.getItem("HomeReload");    
      if (load == "true") {
        sessionStorage.setItem("HomeReload", "false");
        window.location.reload();
      }      
    
  }
  ngOnDestroy() {
    sessionStorage.setItem("HomeReload", "true");
  }

}
