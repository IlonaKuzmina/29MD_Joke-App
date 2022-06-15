import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JokesModels } from 'src/app/models/jokesModels';

@Component({
  selector: 'app-jokes-card',
  templateUrl: './jokes-card.component.html',
  styleUrls: ['./jokes-card.component.scss'],
})
export class JokesCardComponent {
  @Input() joke?: JokesModels;
  @Output() deleteTaskEvent = new EventEmitter<null>();

  tellAnswer = false;

  constructor() {}

  togleTellAnswer(): void {
    this.tellAnswer = !this.tellAnswer;
  }

  deleteTask(): void {
    this.deleteTaskEvent.emit();
  }
}
