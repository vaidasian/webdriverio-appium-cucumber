import { ChainablePromiseElement } from 'webdriverio';
import dotenv from "dotenv";

dotenv.config();

export class LoginPage {
    static get inputUsername(): ChainablePromiseElement<WebdriverIO.Element> { return $('*[data-test="username"]'); }
    static get inputPassword(): ChainablePromiseElement<WebdriverIO.Element> { return $('*[data-test="password"]'); }
    static get btnSubmit(): ChainablePromiseElement<WebdriverIO.Element> { return $('*[data-test="login-button"]'); }
    static get textErrorMessage(): ChainablePromiseElement<WebdriverIO.Element> { return $('*[data-test="error"]'); }
    static get stringErrorMessage(): string { return 'Epic sadface: Password is required'; }
    static get stringTitle(): string { return 'Swag Labs'; }

    static async performLogin(): Promise<void> {
        await LoginPage.inputUsername.setValue(`${process.env.SAUCEDEMO_USER}`);
        await LoginPage.inputPassword.setValue(`${process.env.SAUCEDEMO_PASSWORD}`);
        await LoginPage.btnSubmit.click();
    }

    static async verifyErrorMessage(): Promise<void> {
        expect(await LoginPage.textErrorMessage).toHaveTextContaining(LoginPage.stringErrorMessage);
    }
}
