import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nom: string="";
  pass: string="";

  constructor(private alertcontroller: AlertController,
              private router: Router
  ) {}


  async login(){
    if(this.nom=="" || this.pass==""){
      this.alertaError();
    } else {
      this.alertaLogin();
    }
  }

  async alertaLogin(){
    const alert = await this.alertcontroller.create({
      header: 'Sesión iniciada! Bienvenido/a '+ this.nom,
      mode: 'ios',
      cssClass: 'contactAlert',
      buttons: [
        {
          text: 'Ir al inicio',
          role: 'back',
          handler: () => {
            console.log('Alerta Confirmada (Ir al menú principal)');
            this.router.navigate(['/tabs'])
            this.limpiar();
          },
        },
      ],
    });

    await alert.present();

  }
  async alertaError(){
    const alert = await this.alertcontroller.create({
      header: 'Error! Usuario o contraseña incorrectos o vacíos',
      mode: 'ios',
      cssClass: 'contactAlert',
      buttons: [
        {
          text: 'Aceptar',
          role: 'back',
          handler: () => {
            console.log('Alerta Confirmada');
          },
        },
      ],
    });

    await alert.present();
  }

  limpiar(){
    this.nom="";
    this.pass="";
  }

}
