import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class SettingsService {

    isMobile: boolean;

    constructor(
        private platform: Platform
    ) {
        this.isMobile = this.platform.is('mobile');
    }
}