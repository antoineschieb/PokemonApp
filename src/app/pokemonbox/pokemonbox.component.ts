import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pokemonbox',
  templateUrl: './pokemonbox.component.html',
  styleUrls: ['./pokemonbox.component.css']
})

export class PokemonboxComponent implements OnInit {

  @Input() id: any; 

  constructor( private data: DataService ) {  }

  pok: Object;
  has2Types: boolean;
  pokImgUrl: string;

  ngOnInit() {

    this.data.getPokemonSpecs(this.id).subscribe(pokData => {
      this.pok = pokData;
      });


      
     
   

  }


  



}
