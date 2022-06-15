import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JokesModels } from 'src/app/models/jokesModels';

@Component({
  selector: 'app-jokes-form',
  templateUrl: './jokes-form.component.html',
  styleUrls: ['./jokes-form.component.scss'],
})
export class JokesFormComponent implements OnInit {
  @ViewChild('jokeInput') jokeInput: ElementRef | undefined;
  @Output() addJokeEvent = new EventEmitter<JokesModels>();
  tellAnswer = false;
  jokesForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.focusInputElement();
  }

  togleTellAnswer(): void {
    this.tellAnswer = !this.tellAnswer;
  }

  addJoke(): void {
    this.jokesForm.markAllAsTouched();
    if (this.jokesForm.valid) {
      this.addJokeEvent.emit(this.jokesForm.value);
      this.jokesForm.reset();
      this.focusInputElement();
    }
    console.log(this.jokesForm.value);
  }

  buildForm(): void {
    this.jokesForm = this.fb.group({
      joke: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });
  }

  focusInputElement(): void {
    this.jokeInput?.nativeElement.focus();
  }
}
