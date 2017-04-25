import { environment } from '../environments/environment';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Vote } from './vote';
import 'rxjs/add/operator/map'

@Injectable()
export class VoteService {
  private votesUrl = `${environment.apiUrl}/api/votes`;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  create(votes: Vote[]) {
    return this.http.post(this.votesUrl, JSON.stringify({votes: votes}), {headers: this.headers})
      .map(res => res.json());
  }
}


