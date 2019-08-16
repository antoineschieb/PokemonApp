import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  
  numbers = [ ...Array(25).keys() ];
  //numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  title = 'PokemonApp';
}
