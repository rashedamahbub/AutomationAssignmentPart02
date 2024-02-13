import { $ } from '@wdio/globals'
import Page from './page.js';

class FileUp extends Page {
    get  withqrcode () {
        return   $("//span[normalize-space()='Continue with QR code']")
    }

    async tocallwithqrcode () {
        await this.withqrcode.click();
    }
    
    open () {
        return super.open('en/tenant');
    }

}

export default new FileUp();
