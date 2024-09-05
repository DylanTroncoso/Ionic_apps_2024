import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nom:string="";
  pass:string="";

  constructor(private alertcontroller: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    if (this.nom === '' || this.pass === '') {
      this.alertaError();
    } else{
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

