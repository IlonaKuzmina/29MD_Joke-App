import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokesModels } from 'src/app/models/jokesModels';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss'],
})
export class JokesListComponent {
  @Input() jokes?: JokesModels[] = [];
  @Output() deleteTaskEvent = new EventEmitter<number>();

  deleteTask(index: number): void {
    this.deleteTaskEvent.emit(index);
  }
}
