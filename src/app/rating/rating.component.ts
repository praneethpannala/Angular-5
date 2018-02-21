import {Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'prod-star',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
  })
export class StarRatingComponent {

    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void{
        this.starWidth= this.rating* 86/5;
    }
}