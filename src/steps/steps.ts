import { Given, When, Then } from '@wdio/cucumber-framework';

import { LoginPage, LandingPage } from '../pages';
import { Browser, Unauthentic } from "../helpers";
import {ProductPage} from "../pages/productPage";
import {CartPage} from "../pages/cartPage";

Given("user is on login page", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await Browser.openBrowser();
});

Given("user is on landing page", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await Browser.openBrowser();
});

Given("user is unauthenticated", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await Unauthentic.unauthenticUser(await LoginPage.btnSubmit);
});

When("user performs valid login", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await LoginPage.performLogin();
});

When("user performs invalid login", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    const inputUsernameObject: WebdriverIO.Element = await LoginPage.inputUsername;
    await inputUsernameObject.setValue("bernd");
    await LoginPage.btnSubmit.click();
});

When("user selects first product", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    const textItemNameObject: WebdriverIO.ElementArray = await $$(LandingPage.textItemName);
    const textItemNameObjectFirst: WebdriverIO.Element = textItemNameObject[0];
    await textItemNameObjectFirst.scrollIntoView();
    await textItemNameObjectFirst.click();
});

When("user adds product to cart", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await ProductPage.btnAddToCart.scrollIntoView();
    await ProductPage.btnAddToCart.click();
});

When("user removes product from cart", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await ProductPage.btnRemoveFromCart.scrollIntoView();
    await ProductPage.btnRemoveFromCart.click();
    await ProductPage.btnAddToCart.click();
});

When("user selects cart", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await ProductPage.btnCart.click();
});

Then("verify landing page", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await LandingPage.verifyContent();
    await LandingPage.verifyProducts();
});

Then("verify error message on login page", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await LoginPage.verifyErrorMessage();
});

Then("verify product page", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await ProductPage.verifyContent();
    await ProductPage.verifyProductFirst();
});

Then("verify cart page", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await CartPage.verifyContent();
});

Then("verify empty cart page", { wrapperOptions: { retry: 1 } }, async (): Promise<void> => {
    await CartPage.verifyEmptyContent();
});
