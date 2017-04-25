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
  title = 'Fuck/Marry/Kill';
  state = {
    fuck: null,
    marry: null,
    kill: null
  }
  characters: Character[];
  voted: boolean = false;

  populateCharacters(): void {
    this.characterService.getCharacters().subscribe(characters => this.characters = characters);
  }

  ngOnInit(): void {
    this.populateCharacters();
  }

  vote(value, character): void {
    const newState = Object.keys(this.state).reduce((memo, key) => {
      if (this.state[key] === character) {
        memo[key] = null
      }
      return memo;
    }, {});

    this.state = Object.assign({}, this.state, newState, {
      [value]: character
    });
  }

  reset(): void {
    this.state = {
      fuck: null,
      marry: null,
      kill: null
    }
    this.voted = false;
  }

  // get survey() {
  //   const winners = ['fuck', 'marry', 'kill'].reduce((memo, val) => {
  //     const sorted = Array.prototype.slice.call(this.characters).sort((a, b) => {
  //       if (a.percentages[val] > b.percentages[val]) {
  //         return -1;
  //       }
  //       if (a.percentages[val] < b.percentages[val]) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //     const highest = sorted[0];
  //     if (!memo[highest.name]) {
  //       memo[highest.name] = val;
  //     } else {
  //       memo[sorted[1].name] = val;
  //     }

  //     return memo;
  //   }, {});
  //   return winners;
  // }

  submit(): void {
    const votes = Object.keys(this.state).map((key) => {
      return {
        value: key,
        character_id: this.state[key] as number
      } as Vote
    }).filter((vote) => vote.character_id);
    if (votes.length === 3) {
      this.voteService.create(votes).subscribe((characters) => {
        this.characters = characters.map(character => new Character(character));
        this.voted = true;
      });
    }
  }

  next(): void {
    this.reset();
    this.populateCharacters();
  }
}
