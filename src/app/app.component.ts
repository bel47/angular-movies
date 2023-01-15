import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-movies';

  movies = [{
    title: 'Spider man',
    releaseDate: new Date(),
    price: 1400.99
  },
  {
    title: 'Moana',
    releaseDate: new Date("2016-16-11"),
    price: 450.99
  },
  {
    title: 'Spider man',
    releaseDate: new Date(),
    price: 300.99
  }];

  dupulictaeNumber(n:any){
    return n*2;
  }
}
