import { Component, OnInit } from '@angular/core';
import { JokesModels } from 'src/app/models/jokesModels';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit {
  jokes: JokesModels[] = [];

  addJoke(joke: JokesModels): void {
    this.jokes = [...this.jokes, joke];
    this.saveList();
  }

  saveList(): void {
    localStorage.setItem('jokes', JSON.stringify(this.jokes));
  }

  getJokes() {
    return this.jokes;
  }

  ngOnInit(): void {
    this.jokes = JSON.parse(localStorage.getItem('jokes') || '{}');
  }

  deleteTask(index: number) {
    if (index > -1) {
      this.jokes.splice(index, 1);
      this.saveList();
    }
  }
}
