import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor( public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentInput() {

    const input = await this.alertCtrl.create({
      header: 'input',
      subHeader: 'Ingresa tu nombre',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text' ,
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

   await input.present();

  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Esta es una alerta',
      message: 'Hola, no le busques que no va haber respuestas.',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelar');
        }
      },
      {
          text: 'Aceptar',
          handler: (blah) => {
            console.log('Botón OK');
        }
      }
     ]
    });

    await alert.present();

  }
}
