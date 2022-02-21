import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  exampleNFC: string = "\u0041\u006d\u00e9\u006c\u0069\u0065";
  exampleNFD: string = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

  exampleMode: string = '';
  inputValue: string = '';
  inputValue2: string = '';

  ngOnInit(): void {
    console.log('exampleNFC', this.exampleNFC);
    console.log('exampleNFD', this.exampleNFD);
    console.log(this.exampleNFC.length, this.exampleNFD.length);
  }


  getCodePoints(value: string): number[] {
    let codePoints: number[] = [];
    for (let i = 0; i < value.length; i++) {
      const codePoint = value.codePointAt(i);
      if (codePoint) {
        codePoints.push(codePoint);
      }
    }
    return codePoints;
  }

  encodeURIComponent(inputValue: string): string {
    return window.encodeURIComponent(inputValue);
  }

  clearInputs() {
    this.inputValue = '';
    this.inputValue2 = '';
    this.exampleMode = '';
  }

}
