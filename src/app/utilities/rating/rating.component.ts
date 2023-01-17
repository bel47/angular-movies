import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0)
  }

  @Input()
  maxRating = 5;
  @Input()
  selectedRate = 0;
  @Output()
  onRating:EventEmitter<number> = new EventEmitter<number>();
  previouseRate = 0;
  maxRatingArr = [];

  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }
  handleMouseLeave() {
    if (this.previouseRate !== 0) {
      this.selectedRate = this.previouseRate;
    } else {
      this.selectedRate = 0;
    }
  }
  rate(index: number) {
    this.selectedRate = index + 1;
    this.previouseRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }

}
