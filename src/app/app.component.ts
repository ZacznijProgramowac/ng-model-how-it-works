import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  surname = '';
  profession = '';

  info: string;

  onSend() {
    this.info = `${this.name} ${this.surname} ${this.profession}`;
    this.name = '';
    this.surname = '';
    this.profession = null;
  }
}
