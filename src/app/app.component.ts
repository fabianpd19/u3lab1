import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material';

@Component({
  selector: 'app-root',
  imports: [MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'u3-practica';
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  
}
