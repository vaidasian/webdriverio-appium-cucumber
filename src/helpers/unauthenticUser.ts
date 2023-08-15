import {LandingPage, LoginPage} from "../pages";
import {Browser} from "./browser";

export class Unauthentic {
    static async unauthenticUser(element: WebdriverIO.Element): Promise<void> {
        const elementObjectDisplayed: boolean = await element.isDisplayed();
        if ( !(elementObjectDisplayed) ) {
            const textHeaderTitleObject: WebdriverIO.Element = await LandingPage.textHeaderTitle;
            const textHeaderTitleObjectDisplayed: boolean = await textHeaderTitleObject.isDisplayed();
            if (textHeaderTitleObjectDisplayed) {
                if (browser.isMobile) {
                    await browser.deleteCookies('session-username');
                    await browser.refresh();
                }
            }
        }
        const loginTitle: string = LoginPage.stringTitle;
        await Browser.browserTitle(loginTitle);
        const btnLogInObject: WebdriverIO.Element = await LoginPage.btnSubmit;
        await btnLogInObject.waitForDisplayed();
    }
}