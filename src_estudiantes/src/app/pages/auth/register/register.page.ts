import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nom: string="";
  rut: string="";
  email: string="";
  pass: string="";

  constructor( private alertcontroller: AlertController,
                private router: Router) { }

  ngOnInit() {
  }

  async alertaRegistro(){
    const alert = await this.alertcontroller.create({
      header: 'Fuiste registrado/a! Ahora debes iniciar sesión! '+ this.email,
      mode: 'ios',
      cssClass: 'contactAlert',
      buttons: [
        {
          text: 'Iniciar sesión',
          role: 'back',
          handler: () => {
            console.log('Alerta Confirmada (Volver al menú principal)');
            this.router.navigate(['/login'])
            this.limpiar();
          },
        },
      ],
    });

    await alert.present();

  }
  limpiar(){
    this.nom="";
    this.email="";
    this.pass="";
    this.rut="";
  }
}
