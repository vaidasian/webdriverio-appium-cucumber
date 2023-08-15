import {ChainablePromiseElement} from "webdriverio";

export class LandingPage {
    static get divItem(): string { return '.inventory_item'; }
    static get textItemName(): string { return '.inventory_item .inventory_item_name'; }
    static get textItemNameExpected(): string { return 'Sauce Labs Backpack'; }
    static get textHeaderTitle(): ChainablePromiseElement<WebdriverIO.Element> { return $('.app_logo'); }
    static get stringHeaderTitle(): string { return 'Swag Labs'; }

    static async verifyContent(): Promise<void> {
        const textHeaderTitleObject: WebdriverIO.Element = await LandingPage.textHeaderTitle;
        await textHeaderTitleObject.waitForDisplayed();
        expect(textHeaderTitleObject).toHaveTextContaining(LandingPage.stringHeaderTitle);
    }

    static async verifyProducts(): Promise<void> {
        const divItemObject: WebdriverIO.ElementArray = await $$(LandingPage.divItem);
        const textItemObjectText: WebdriverIO.ElementArray = await $$(LandingPage.textItemName);
        const divItemObjectFirst: WebdriverIO.Element = divItemObject[0];
        const textItemObjectTextFirst: WebdriverIO.Element = textItemObjectText[0];
        await divItemObjectFirst.waitForDisplayed();
        expect(divItemObject).toBeElementsArrayOfSize(6);
        expect(textItemObjectTextFirst).toHaveTextContaining(LandingPage.textItemNameExpected);
    }
}
