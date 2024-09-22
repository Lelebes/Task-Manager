import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, // Essa linha define o componente como standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    /* Outros componentes standalone que ele usa */
  ],
})
export class AppComponent {
  title = 'Minha Aplicação';
}
