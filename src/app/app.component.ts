import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RulesComponent } from './components/rules/rules.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RulesComponent , RouterLink ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected the property name
})
export class AppComponent {
 

}
