import { Component, Input, Output } from '@angular/core';
import { JokesModels } from 'src/app/models/jokesModels';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss'],
})
export class JokesListComponent {
  @Input() jokes?: JokesModels[] = [];
}
