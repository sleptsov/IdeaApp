import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()

export class LoadingService {

    private loading: Loading;

    constructor(
        public loadingCtrl: LoadingController
    ) { }

    presentLoading(message: string, dismissOnPageChange: boolean = false) {
        if (this.loading) {
            this.loading.dismiss().catch((e) => { console.log(e) });
        }

        this.loading = this.loadingCtrl.create({
            content: message,
            dismissOnPageChange: dismissOnPageChange
        });

        this.loading.present();
    }

    dismiss(): void {
        if (this.loading) {
            this.loading.dismiss().catch((e) => { console.log(e) });
        }
    }
}