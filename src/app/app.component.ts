import { Component } from '@angular/core';
import { CharacterService } from './character.service';
import { VoteService } from './vote.service';
import { Character } from './character';
import { Vote } from './vote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (
    private characterService: CharacterService,
    private voteService: VoteService,
  ) {}
  title = 'Fuck, Marry, Kill';
  state = {
    fuck: null,
    marry: null,
    kill: null
  }
  characters: Character[];

  populateCharacters(): void {
    this.characterService.getCharacters().subscribe(characters => this.characters = characters);
  }

  ngOnInit(): void {
    this.populateCharacters();
  }

  vote(value, character) {
    Object.keys(this.state).forEach((key) => {
      if (this.state[key] === character) {
        this.state[key] = null;
      }
    });
    this.state[value] = character;
  }

  submit(): void {
    const votes = Object.keys(this.state).map((key) => {
      return {
        value: key,
        character_id: this.state[key] as number
      } as Vote
    }).filter((vote) => vote.character_id);
    if (votes.length === 3) {
      this.voteService.create(votes).subscribe(characters => this.characters = characters);
    }
  }

  next(): void {
    this.populateCharacters();
  }
}
