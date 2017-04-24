import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Character } from './character';
import 'rxjs/add/operator/map'


@Injectable()
export class CharacterService {
  private charactersUrl = 'http://localhost:3000/api/characters';

  constructor(private http: Http) { }

  getCharacters() {
    return this.http.get(this.charactersUrl).map(res => res.json());
  }
}


