import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesCardComponent } from './components/jokes-card/jokes-card.component';
import { JokesListComponent } from './components/jokes-list/jokes-list.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { JokesFormComponent } from './components/jokes-form/jokes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesCardComponent,
    JokesListComponent,
    JokesComponent,
    JokesFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
