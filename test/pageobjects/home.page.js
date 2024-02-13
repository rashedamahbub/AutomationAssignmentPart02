import { $ } from '@wdio/globals'
import Page from './page.js';
// import path from 'node:path'
import path from 'path';
import { fileURLToPath } from 'url';
//const path = require('path');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get starttenantflow () {
        return   $("div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.MuiGrid-wrap-xs-nowrap.mui-lv9arm:nth-child(1) div.MuiBox-root.mui-rskxlf div.MuiBox-root.mui-b03m6s div.MuiGrid-root.MuiGrid-container.mui-8rnkcc div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-mobile-12.MuiGrid-grid-tablet-12.MuiGrid-grid-desktop-5.mui-6kf2vx:nth-child(2) > div.MuiGrid-root.MuiGrid-item.mui-19b67c:nth-child(4)");
    }
   

    async tocallstarttenantflow () {
        await this.starttenantflow.click();
    }

    get  withqrcode () {
        return   $("//span[normalize-space()='Mit QR-Code forfahren']");
    }

    async tocallwithqrcode () {
        await this.withqrcode.click();
    }

    get  uploadqr () {
        return   $("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-mobile-12 mui-1m0xexp']//button[@type='button']");
    }

    async tocalluploadqr () {
        await this.uploadqr.click();
    }

async upload() {
    await browser.url('http://tenant-service7000.seliselocal.com/tenant/with-qr')

    const filePath = '../data/test.png'
    const remoteFilePath = await browser.uploadFile(filePath)
    input.setValue(remoteFilePath)
    browser.pause(5000)
};

async upload1() {
          // find selectors
          const input =await $("input[type='file']");
          // store test file path
          const filePath = '../data/test.png';
            await this.fileUpload(filePath, input)
          // use browser.uploadFile to upload the test file
        //   const remoteFilePath = browser.uploadFile(filePath);
      
          // access the test page
          //browser.url('http://tenant-service7000.seliselocal.com/en/tenant/with-qr');
      
          // set file path value in the input field
        //   input.setValue(remoteFilePath);
          //submitBtn.click(); // click the submit button
          browser.pause(5000)
};
async fileUpload(url, locator) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, url);

    const upload_file_element = await locator;
    await upload_file_element.scrollIntoView({ block: 'end' });
    await browser.execute(async (e) => {
      e.style.display = 'block';
    }, upload_file_element);

    await upload_file_element.waitForDisplayed();
    await upload_file_element.setValue(filePath);
  }
    /**
     * 

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //async login (username, password) {
        //await this.inputUsername.setValue(username);
       // await this.inputPassword.setValue(password);
       // await this.btnSubmit.click();
    //}

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }

}

export default new HomePage();
