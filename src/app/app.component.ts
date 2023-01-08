import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DrawComponent } from './draw/draw.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DrawComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mirror Draw';
}
