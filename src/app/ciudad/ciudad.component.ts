import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  @Input() tiempo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
