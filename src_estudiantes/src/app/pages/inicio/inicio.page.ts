import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { first } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( private menu:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menu.open('first');
  }
}
