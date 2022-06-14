import { Component } from '@angular/core';
import { JokesModels } from 'src/app/models/jokesModels';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  jokes: JokesModels[] = [
    {
      joke: 'joke example',
      answer: 'answer example',
    },
  ];

  addJoke(joke: JokesModels): void {
    this.jokes = [...this.jokes, joke];
  }
}
