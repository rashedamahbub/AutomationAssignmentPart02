import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import fileup from '../pageobjects/file.up.js'

describe('Service7000 application', () => {
    it('should open Homepage', async () => {
        await HomePage.open()
        await browser.pause(5000)
        await HomePage.tocallstarttenantflow()
        await browser.pause(4000)
        await HomePage.tocallwithqrcode()
        await browser.pause(10000)
        // await HomePage.tocalluploadqr()
        // await browser.pause(10000)
        await HomePage.upload1()
        await browser.pause(10000)
        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!')
    }
    )
})

