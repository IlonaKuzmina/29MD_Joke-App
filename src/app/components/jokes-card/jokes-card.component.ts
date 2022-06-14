import { Component, Input, Output,EventEmitter } from '@angular/core';
import { JokesModels } from 'src/app/models/jokesModels';

@Component({
  selector: 'app-jokes-card',
  templateUrl: './jokes-card.component.html',
  styleUrls: ['./jokes-card.component.scss'],
})
export class JokesCardComponent {
  @Input() joke?: JokesModels;
  @Output() deleteJokeEvent = new EventEmitter();

  tellAnswer = false;

  constructor() {}

  togleTellAnswer(): void {
    this.tellAnswer = !this.tellAnswer;
  }

}
