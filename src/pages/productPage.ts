import {ChainablePromiseElement} from "webdriverio";

export class ProductPage {
    static get textProductPrice(): ChainablePromiseElement<WebdriverIO.Element> { return $('.inventory_details_price'); }
    static get strProductPrice(): string { return '$29.99'; }
    static get btnAddToCart(): ChainablePromiseElement<WebdriverIO.Element> { return $('*[data-test="add-to-cart-sauce-labs-backpack"]'); }
    static get strAddToCart(): string { return 'Add to cart'; }
    static get btnRemoveFromCart(): ChainablePromiseElement<WebdriverIO.Element> { return $('*[data-test="remove-sauce-labs-backpack"]'); }
    static get strRemoveFromCart(): string { return 'Remove'; }
    static get btnCart(): ChainablePromiseElement<WebdriverIO.Element> { return $('.shopping_cart_link'); }

    static async verifyContent(): Promise<void> {
        const btnAddToCartObject: WebdriverIO.Element = await ProductPage.btnAddToCart;
        await btnAddToCartObject.waitForDisplayed();
        expect(btnAddToCartObject).toHaveTextContaining(ProductPage.strAddToCart);
    }

    static async verifyProductFirst(): Promise<void> {
        const textProductPriceObject: WebdriverIO.Element = await ProductPage.textProductPrice;
        expect(textProductPriceObject).toHaveTextContaining(ProductPage.strProductPrice);
    }
}
