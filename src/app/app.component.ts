import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-movies';

  dupulictaeNumber(n:any){
    return n*2;
  }

  handleRating(rate:number){
    alert(`the user selected ${rate}`)
  }
}
