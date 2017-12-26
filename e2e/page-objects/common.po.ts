import { browser } from 'protractor';

export class CommonPage {

    navigateTo(destination) {
        return browser.get(destination);
    }

    checkUrl(url: string, timeout = 1500) {
        let urlToCheck = new RegExp(url);
        return browser.driver.wait(() => {
            return browser.driver.getCurrentUrl().then((url) => {
                return urlToCheck.test(url);
            });
        }, timeout);
    }

    getTitle() {
        return browser.getTitle();
    }

}