import { Injectable } from '@angular/core';
import { Observable, asyncScheduler, scheduled } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mocks/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = scheduled([HEROES], asyncScheduler);
    return heroes;
  }

  constructor() {}
}
