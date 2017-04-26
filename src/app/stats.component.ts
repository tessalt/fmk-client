import { Component } from '@angular/core';
import { StatsService } from './stats.service';
import { Character } from './character';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})

export class StatsComponent {
  constructor (
    private statsService: StatsService,
  ) {}

  characters: Character[];

  populateStats(): void {
    this.statsService.getStats().subscribe(characters => {
      this.characters = characters.map(character => new Character(character));
    });
  }

  sort(value: string): void {
    this.characters.sort((a, b) => {
      if (a.percentages[value] > b.percentages[value]) {
        return -1;
      }
      if (a.percentages[value] < b.percentages[value]) {
        return 1;
      }
      return 0;
    });
  }

  ngOnInit(): void {
    this.populateStats();
  }
}
