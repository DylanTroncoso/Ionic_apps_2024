import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertcontroller: AlertController,
    private router: Router,) { }

  nom: string = "";
  rut: string = "";
  email: string = "";
  pass: string = "";

  async Register() {
    if (this.nom == "" || this.rut == "" || this.email == "" || this.pass == "") {
      this.alertaError();
    } else {
      this.alertaRegistro();
    }
  }

  async alertaRegistro() {
    const alert = await this.alertcontroller.create({
      header: 'Usuario registrado! Bienvenido/a ' + this.nom,
      mode: 'ios',
      cssClass: 'contactAlert',
      buttons: [
        {
          text: 'Ir al inicio',
          role: 'back',
          handler: () => {
            console.log('Alerta Confirmada');
              this.router.navigate(['/tabs'])
              this.limpiar();
          },
          },
      ],
    });

    await alert.present();

  }
  async alertaError() {
    const alert = await this.alertcontroller.create({
      header: 'Error! Debe completar todos los campos',
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

  limpiar() {
    this.nom = "";
    this.rut = "";
    this.email = "";
    this.pass = "";
  }
}