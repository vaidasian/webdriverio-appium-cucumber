import {ChainablePromiseElement} from "webdriverio";

export class CartPage {
    static get textCartTitle(): ChainablePromiseElement<WebdriverIO.Element> { return $('.title'); }
    static get strCartTitle(): string { return 'Your Cart'; }
    static get btnRemove(): ChainablePromiseElement<WebdriverIO.Element> { return $('*[data-test="remove-sauce-labs-backpack"]'); }
    static get btnCheckout(): ChainablePromiseElement<WebdriverIO.Element> { return $('*[data-test="checkout"]'); }
    static get strRemove(): string { return 'Remove'; }
    static get strCheckout(): string { return 'Checkout'; }
    static get divCartList(): string { return '.cart_list'; }

    static async verifyContent(): Promise<void> {
        expect(await CartPage.textCartTitle).toHaveTextContaining(CartPage.strCartTitle);
        expect(await CartPage.btnRemove).toHaveTextContaining(CartPage.strRemove);
        expect(await CartPage.btnCheckout).toHaveTextContaining(CartPage.strCheckout);
        const divCartListObject: WebdriverIO.ElementArray = await $$(CartPage.divCartList);
        expect(divCartListObject).toBeElementsArrayOfSize( { gte: 1 } );
    }

    static async verifyEmptyContent(): Promise<void> {
        expect(await CartPage.textCartTitle).toHaveTextContaining(CartPage.strCartTitle);
        expect(await CartPage.btnRemove).toHaveTextContaining(CartPage.strRemove);
        expect(await CartPage.btnCheckout).toHaveTextContaining(CartPage.strCheckout);
        const divCartListObject: WebdriverIO.ElementArray = await $$(CartPage.divCartList);
        expect(divCartListObject).toBeElementsArrayOfSize(0);
    }
}
