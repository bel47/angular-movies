import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.scss']
})
export class EditMoviesComponent implements OnInit{
  constructor(private activatedRote:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRote.params.subscribe(params =>{
      
    })
  }

}
