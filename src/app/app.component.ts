import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'prasad';
  isContentVisible: boolean = false;
  buttonLabel: string = 'Show More';

  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
    this.buttonLabel = this.isContentVisible ? 'Show Less' : 'Show More';
  }
}