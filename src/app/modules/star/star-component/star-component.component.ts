import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnInit {

  constructor() { }

  currentRate: number = 6;
  ngOnInit(): void {
  }

}
