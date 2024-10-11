import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HeaderComponent } from './shared/ui/header/header.component';
=======
>>>>>>> 968438f312249f1d3094d846c841237440146c66

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HeaderComponent],
=======
  imports: [RouterOutlet],
>>>>>>> 968438f312249f1d3094d846c841237440146c66
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signal-store';
}
