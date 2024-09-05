import { Component } from '@angular/core';

  interface Opciones{
    icon: string;
    name: string;
    redirecTo: string;
  }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones: Opciones[] = [
    {
      icon:'person-circle-outline',
      name:'login',
      redirecTo: '/login'
    }
  ]
  constructor() {}
}
