import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor, HeroDetailComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  getHeros(): void {
    this.heroService.getHeroes().subscribe((data) => (this.heroes = data));
  }

  ngOnInit(): void {
    this.getHeros();
  }

  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
