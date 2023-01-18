import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.scss']
})
export class EditActorsComponent implements OnInit{
constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      // alert(param['id'])
    })
    // this.activatedRoute.paramMap.subscribe(param=>{
    //   alert(param.get('id'))
    // })
  }
}
