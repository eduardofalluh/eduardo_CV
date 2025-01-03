import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None, // Disable encapsulation to ensure global styles work
  imports: [RouterModule], // Import RouterModule for routing functionality
})
export class AppComponent {}