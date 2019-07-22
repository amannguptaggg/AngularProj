import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Routing';
  value=false;
constructor() {}
ngOnInit() { 
}

display() {

   if(this.value==false) {

     this.value = true;

   } else{
     this.value = false;

    }
    console.log(this.value);
}

}
