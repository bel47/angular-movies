import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    
    this.moviesInTheaters = [{
      title: 'Spider man',
      releaseDate: new Date(),
      price: 1400.99,
      poster:'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_QL75_UY562_CR0,0,380,562_.jpg'
    },
    {
      title: 'Moana',
      releaseDate: new Date("2016-11-16"),
      price: 450.99,
      poster:'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1086_.jpg'
    }]; 

    this.moviesFutureReleases = [{
      title: 'Toy Story',
      releaseDate: new Date("2016-11-16"),
      price: 450.99
    },
    {
      title: 'Avangers',
      releaseDate: new Date(),
      price: 300.99
    }]; 
  }

  moviesInTheaters;
  moviesFutureReleases;
}
