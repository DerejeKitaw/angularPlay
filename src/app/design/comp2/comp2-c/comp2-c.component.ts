import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comp2-c',
  templateUrl: './comp2-c.component.html',
  styleUrls: ['./comp2-c.component.scss']
})
export class Comp2CComponent  {
  elRef;
  constructor(elRef: ElementRef) { 
    this.elRef=elRef;
    console.log(this.elRef.nativeElement);

  }

  ngOnInit() {
  }
  move(ref: ElementRef) {
    console.log(this.elRef.nativeElement);
  }

}
