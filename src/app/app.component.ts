import { Component } from '@angular/core';
import { CharacterService } from './character.service';
import { VoteService } from './vote.service';
import { Character } from './character';
import { Vote } from './vote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  constructor (
  ) {}
  title = 'Fuck/Marry/Kill';
}
