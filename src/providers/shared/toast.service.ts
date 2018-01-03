import { Injectable } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';

@Injectable()

export class ToastService {

    private toast: Toast;

    constructor(
        public toastCtrl: ToastController
    ) { }

    presentToast(message: string, position: string = 'bottom', closeButton: boolean = false, css?: string) {
        if (this.toast) {
            this.toast.dismiss().catch((e) => { console.log(e) });
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: closeButton ? null : 3000,
            position: position,
            showCloseButton: closeButton,
            closeButtonText: 'Close',
            cssClass: css
        });
        this.toast.present();
    }
}