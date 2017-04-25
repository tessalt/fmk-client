import {environment} from '../environments/environment';
import {Vote} from './vote';

export class Character {
  id: number;
  name: string;
  photo: string;
  votes: Vote[];

  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.photo = params.photo;
    this.votes = params.votes.map(vote => new Vote(vote));
  }

  get percentages() {
    const totalVotes = this.votes.reduce((memo, vote) => {
      return memo + vote.count;
    }, 0);
    return this.votes.reduce((memo, vote) => {
      memo[vote.value] = Math.floor((vote.count / totalVotes) * 100);
      return memo;
    }, {});
  }

  get conclusion(): string {
    return this.sortedVotes[0].value;
  }

  get sortedVotes(): Vote[] {
    return this.votes.sort((a, b) => {
      if (a.count > b.count) {
        return -1;
      }
      if (a.count < b.count) {
        return 1;
      }
      return 0;
    });
  }
}
