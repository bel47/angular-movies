import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss']
})
export class CreateGenreComponent implements OnInit {
constructor(private router:Router){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  saveChanges(){
    this.router.navigate(['/genres'])
  }
}
