import { environment } from '../environments/environment';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Character } from './character';
import 'rxjs/add/operator/map'

@Injectable()
export class StatsService {
  private statsUrl = `${environment.apiUrl}/api/stats`;

  constructor(private http: Http) { }

  getStats() {
    return this.http.get(this.statsUrl).map(res => res.json());
  }
}


