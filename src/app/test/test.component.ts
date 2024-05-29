import { Component, OnInit } from '@angular/core';
import { Imobile } from '../shared/model/fairInterface';
import { mobileProducts } from '../shared/const/fair';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  mobileArray : Array<Imobile> = mobileProducts;
  isNotAvaible !: boolean 
  constructor() { }

  ngOnInit(): void {
    this.isNotAvaible = false
  }

  name (): void{
    
  }

}
