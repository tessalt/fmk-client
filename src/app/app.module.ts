import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CharacterService } from './character.service';
import { StatsService } from './stats.service';
import { GameComponent } from './game.component';
import { StatsComponent } from './stats.component';
import { VoteService } from './vote.service';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: GameComponent
      },
      {
        path: 'stats',
        component: StatsComponent
      },
    ])

  ],
  providers: [
    CharacterService,
    VoteService,
    StatsService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
