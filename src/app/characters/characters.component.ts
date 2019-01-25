import { Component, OnInit } from '@angular/core';
import { Character } from '../character'
import { RequestService } from '../service/request.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character;
  powers = [];

  search='';

  constructor(public default_request: RequestService, public search_request: RequestService) { }

  ngOnInit() {
    this.default_request.default()
    this.characters = this.default_request.characters
    this.powers = this.default_request.powers
  }

  searchCharacter(){
    this.search_request.character_search(this.search)
    this.characters = this.search_request.characters
    this.powers = this.search_request.powers
  }

  
}
