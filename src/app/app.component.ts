import { Component } from '@angular/core';
import { MovieServiceService } from './service/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieServiceService]
})

export class AppComponent {
  title = 'app works!';
}
